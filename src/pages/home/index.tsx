import React, { useEffect, useMemo } from "react";
import "../../assets/styles/pages/home.scss";
import Input from "../../components/input";
import { useForm , Controller} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { currencyConverterSchema } from "../../helpers/yupSchema";
import TextField from "../../components/textField";
import Select from "../../components/select";
import Button from "../../components/button";
import { convertCryptoToSourceCurrencyApi, getCryptoCurrencyList } from "../../api";
import { optionDataConverter } from "../../helpers/utils";
import commonToasts from "../../common/commonToasts";
import { sourceCurrOpts } from "../../common/data";
import Loader from "../../components/loader";

const Index = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        reset,
        control
      } = useForm({
        resolver: yupResolver(currencyConverterSchema)
      } );
    
    const formData = watch()
    
    const onSubmit = ( data: any ) => handleConversionSubmit( data );
    
    const [ currencies, setCurrencies ] = React.useState<{ label: string, value: string | number }[] | []>( [] )
    const [ calculatedPrice, setCalculatedPrice ] = React.useState<number>( 0 );
    const [ loading, setLoading ] = React.useState<boolean>( false );
    const [ haveChangedState, setHaveChangedState ] = React.useState(false)
    
    const fetchCurrencyListFunc = async () => {
        try {
            const callResponse = await getCryptoCurrencyList()
            const data = callResponse?.data?.responseData?.data;
            if ( data ) {
                const parsedOptions = optionDataConverter( data, "name", "symbol" );
                setCurrencies(parsedOptions)
            } else {
                commonToasts.errorToast("Sometihng Went Wrong")
            }
        } catch ( err ) {
            commonToasts.errorToast("Sometihng Went Wrong")
        }
    }

    useEffect( () => {
        fetchCurrencyListFunc()
    }, [] )

    const handleConversionSubmit = async (data:any) => {
        try {
            setLoading(true)
            const reqBody = {
                convert: data?.sourceCurr?.value,
                amount: data?.amount,
                symbol: data?.cryptoCurr?.value
            }
            const callResponse = await convertCryptoToSourceCurrencyApi( reqBody );
            const callData = callResponse.data?.responseData?.data[ 0 ]
            if ( callData ) {
                const price = callData?.quote[ data?.sourceCurr?.value ]?.price;
                setCalculatedPrice(price)
            } else {
                commonToasts.errorToast("Sometihng Went Wrong")
            }
            setLoading(false)
        } catch ( err ) {
            setLoading(false)
            commonToasts.errorToast("Sometihng Went Wrong")
        }
    }

    const haveErrors = Object.keys(errors).length > 0
    
    return <React.Fragment>
        <div className="page-container">
            <div className="main-container">
                <form className="form-container" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <TextField as="h2" className="color-secondary" >
                        Currency Converter
                    </TextField>
                    
                    <Controller
                        //@ts-ignore
                        name="cryptoCurr"
                        control={control}
                        render={({ field }) => (
                            <Select options={ currencies } placeholder="Select Crypto Currency" field={field} />
                        )}
                    />
                    <Input name={ "amount" } register={ register } type={ "number" } placeholder={ "Amount of Crypto Currency" } />
                    <Controller
                        //@ts-ignore
                        name="sourceCurr"
                        control={control}
                        render={({ field }) => (
                            <Select options={ sourceCurrOpts } placeholder="Select Crypto Currency" field={field} />
                        )}
                    />
                    <Button type="submit" label={ "Submit" } variant={"secondary"} disabled={haveErrors} />
                </form>
                <div className="value-container">
                    { loading ? <Loader /> :
                        <TextField as="h1" className="color-secondary" >
                            {formData?.sourceCurr?.value && `${formData?.sourceCurr?.value}:` } { Number(calculatedPrice).toFixed(2) }
                        </TextField> }
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Index;