export const optionDataConverter = (arr: [], labelKey: string, valueKey:string) => {
    return arr.map( ( a ) =>
    {
        return {
            label: a[ labelKey ],
            value: a[valueKey]
        }
    })
}