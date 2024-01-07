import Instance from "../instance"

export const getCryptoCurrencyList = () => Instance.get( "v1/crypto-currency-list" );

interface convertCryptoToSourceCurrencyApiTypes {
    convert: string;
    amount: string | number;
    symbol: string;
}

export const convertCryptoToSourceCurrencyApi = (params:convertCryptoToSourceCurrencyApiTypes) => Instance.get( "v1/crypto-currency-converter" , {params: params});