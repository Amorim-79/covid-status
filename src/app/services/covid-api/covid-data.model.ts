export interface CovidModel {
    count: number,
    next: number,
    previous: number,
    results: CovidDataModel[],
}

export interface CovidDataModel {
    city: string,
    city_ibge_code: number,
    confirmed: number,
    confirmed_per_100k_inhabitants: number,
    date: string,
    death_rate: number,
    deaths: number,
    estimated_population: number,
    estimated_population_2019: number,
    is_last: boolean,
    order_for_place: number,
    place_type: string,
    state: string,
}