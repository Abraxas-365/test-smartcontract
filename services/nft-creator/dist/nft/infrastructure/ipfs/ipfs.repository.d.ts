import { ImageMetadata } from 'src/nft/models/imageMetadata';
export interface IIpfsRepo {
    uploadMetadata(metadata: ImageMetadata): Promise<string>;
    uploadImage(fileName: string): Promise<string>;
}
export declare const IIpfsRepo: unique symbol;
export declare class IpfsRepo implements IIpfsRepo {
    apiKey: string;
    apiSecret: string;
    constructor();
    uploadMetadata: any;
    uploadImage: any;
}
