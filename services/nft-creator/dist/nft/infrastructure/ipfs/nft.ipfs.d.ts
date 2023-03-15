export interface IIpfsRepo {
    uploadToIpfs(image: string): Promise<string>;
}
export declare const IIpfsRepo: unique symbol;
export declare class IpfsRepo implements IIpfsRepo {
    uploadToIpfs: any;
}
