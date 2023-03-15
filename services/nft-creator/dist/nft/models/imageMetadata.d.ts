export interface Atributes {
    type?: string;
    emitted?: string;
    by?: string;
    to?: string;
}
export interface ImageMetadata {
    attributes: Array<Atributes>;
    description: string;
    image: string;
    name: string;
}
