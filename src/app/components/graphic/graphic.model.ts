export interface GraphicModel {
    value: GraphicModelValue[];
    labels: string[];
}

export interface GraphicModelValue {
    data: number[],
    label: string,
}