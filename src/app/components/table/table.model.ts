export interface TableModel<T> {
    fields: TableFieldModel[],
    data: T[],
}

export interface TableFieldModel {
    columnName: string,
    keyOfValue: string,
    format?: string,
}