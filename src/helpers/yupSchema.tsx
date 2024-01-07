import * as Yup from "yup";

export const currencyConverterSchema = Yup.object().shape( {
    cryptoCurr: Yup.object( {
        label: Yup.string().required(),
        value: Yup.string().required(),
    } ),
    amount: Yup.number().required(),
    sourceCurr: Yup.object( {
        label: Yup.string().required(),
        value: Yup.string().required(),
    } )
})