export interface TableInterface<T> {
    fields: TableFieldInterface[],
    data: T[],
}

export interface TableFieldInterface {
    columnName: string,
    keyOfValue: string,
    format?: string,
}