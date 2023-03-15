import { Response } from 'express';
import { INftService } from 'src/fechas/service/fechas.service';
export declare class NftController {
    protected fechasService: INftService;
    constructor(fechasService: INftService);
    getFechasAcendente(res: Response): Promise<void>;
}
