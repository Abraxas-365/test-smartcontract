export interface IContract {
    getAddressOfNftOwner(nftId: number): Promise<string>;
    revokeNft(nftId: number): Promise<string>;
    getNumberOfNfts(): Promise<number>;
}
export declare const IContract: unique symbol;
export declare class Contract implements IContract {
    protected contractAddress: string;
    protected contract: any;
    protected web3: import("@alch/alchemy-web3").AlchemyWeb3;
    protected publicKey: string;
    protected privateKey: string;
    protected nftContract: import("web3-eth-contract").Contract;
    constructor();
    getAddressOfNftOwner: any;
    revokeNft: any;
    getNumberOfNfts: any;
}
