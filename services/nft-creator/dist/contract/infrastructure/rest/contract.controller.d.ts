import { Request, Response } from 'express';
import { IContractService } from 'src/contract/service/contract.service';
export declare class ContractController {
    protected contractService: IContractService;
    constructor(contractService: IContractService);
    getAddressOfNftOwner(res: Response, req: Request): Promise<void>;
    getNumberOfNfts(res: Response, req: Request): Promise<void>;
    revokeNft(res: Response, req: Request): Promise<void>;
}
