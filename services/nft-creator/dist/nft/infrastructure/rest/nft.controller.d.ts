import { Request, Response } from 'express';
import { INftService } from 'src/nft/service/nft.service';
export declare class NftController {
    protected nftService: INftService;
    constructor(nftService: INftService);
    uploadImage(res: Response, req: Request): Promise<void>;
    uploadMetadata(res: Response, req: Request): Promise<void>;
    mintNft(res: Response, req: Request): Promise<void>;
}
