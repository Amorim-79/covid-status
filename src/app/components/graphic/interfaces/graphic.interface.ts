export interface GraphicInterface {
    value: GraphicValueInterface[];
    labels: string[];
}

export interface GraphicValueInterface {
    data: number[],
    label: string,
}