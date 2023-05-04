type Params = {
    id: number,
}

type SearchParams = {
    name: string,
    title: string,
    subtitle: string,
    text: string,
}

export type SearchParamsType = {
    params: Params,
    searchParams: SearchParams,
}