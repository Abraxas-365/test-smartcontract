import { IIpfsRepo } from '../infrastructure/repository/fechas.repository';
export interface INftService {
    mintNft(image: string): Promise<any>;
}
export declare const INftService: unique symbol;
export declare class NftService implements INftService {
    protected fechasRepo: IIpfsRepo;
    constructor(fechasRepo: IIpfsRepo);
    mintNft: any;
}
