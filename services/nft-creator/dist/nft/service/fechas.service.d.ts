import { IIpfsRepo } from '../infrastructure/ipfs/ipfs.repository';
export interface INftService {
    mintNft(image: string): Promise<any>;
}
export declare const INftService: unique symbol;
export declare class NftService implements INftService {
    protected ipfsRepo: IIpfsRepo;
    constructor(ipfsRepo: IIpfsRepo);
    mintNft: any;
}
