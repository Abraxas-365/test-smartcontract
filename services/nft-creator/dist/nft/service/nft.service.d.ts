import { IContract } from '../infrastructure/contract/contract';
import { IIpfsRepo } from '../infrastructure/ipfs/ipfs.repository';
import { ImageMetadata } from '../models/imageMetadata';
export interface INftService {
    uploadNftMetadata(metadata: ImageMetadata): Promise<string>;
    uploadNftImage(fileName: string): Promise<string>;
    mintNft(ipfsMetadataId: string, addressTo: string): Promise<string>;
}
export declare const INftService: unique symbol;
export declare class NftService implements INftService {
    protected ipfsRepo: IIpfsRepo;
    protected contract: IContract;
    constructor(ipfsRepo: IIpfsRepo, contract: IContract);
    mintNft: any;
    uploadNftImage: any;
    uploadNftMetadata: any;
}
