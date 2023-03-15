import { Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { IContractService } from 'src/contract/service/contract.service';



@Controller('contract')
export class ContractController {
    constructor(@Inject(IContractService) protected contractService: IContractService) {
    }

    @Get('addressOf/:token')
    async getAddressOfNftOwner(@Res() res: Response, @Req() req: Request) {
        let nftId = req.params['token']
        let address = await this.contractService.getAddressOfNftOwner(Number(nftId))
        res.status(200).json({ address: address })
    };

    @Get('numberOfNfts')
    async getNumberOfNfts(@Res() res: Response, @Req() req: Request) {
        let numberOfNfts = await this.contractService.getNumberOfNfts()
        res.status(200).json({ number_if_nfts: numberOfNfts })
    };

    @Post('revoke/:token')
    async revokeNft(@Res() res: Response, @Req() req: Request) {
        let nftId = req.params['token']
        let numberOfNfts = await this.contractService.revokeNft(Number(nftId))
        res.status(200).json({ number_if_nfts: numberOfNfts })
    };






}
