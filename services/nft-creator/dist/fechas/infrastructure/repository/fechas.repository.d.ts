import { IFecha } from 'src/fechas/models/fechas';
export interface IIpfsRepo {
    getFechas(): Array<IFecha>;
}
export declare const IIpfsRepo: unique symbol;
export declare class IpfsRepo implements IIpfsRepo {
    getFechas: any;
}
