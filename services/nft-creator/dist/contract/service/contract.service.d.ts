import { IContract } from '../infrastructure/contract/contract';
export interface IContractService {
    getAddressOfNftOwner(nftId: number): Promise<string>;
    revokeNft(nftId: number): Promise<string>;
    getNumberOfNfts(): Promise<number>;
}
export declare const IContractService: unique symbol;
export declare class ContractService implements IContractService {
    protected contract: IContract;
    constructor(contract: IContract);
    getAddressOfNftOwner: any;
    revokeNft: any;
    getNumberOfNfts: any;
}
