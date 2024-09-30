export interface Combat {
    id: string;
    boxers: string[]; // es un string porque hace referencia a los ids de los boxeadores
    number: number;
    titleSize: [number, number];
    teams?: string[];
}
