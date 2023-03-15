export interface IContract {
    mintNft(metadataIpfsId: string, addressTo: string): Promise<string>;
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
    mintNft: any;
}
