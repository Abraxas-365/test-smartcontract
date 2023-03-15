import { Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Atributes, ImageMetadata } from 'src/nft/models/imageMetadata';
import { INftService, NftService } from 'src/nft/service/nft.service';
const busboy = require('busboy');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('d9c398e5ee7b8ce69567', 'a3bface20eb99edd3ae4d7c9e26d882d043054041c1e6e632eaa35305596a5e5');
const os = require('os');
const fs = require('fs');
const path = require('path');

@Controller('nft')
export class NftController {
  constructor(@Inject(INftService) protected nftService: INftService) {}

  @Post('image')
  async uploadImage(@Res() res: Response, @Req() req: Request) {
    const bb = busboy({ headers: req.headers });
    bb.on('file', async (name: any, file: any, info: any) => {
      //guardando la imagen
      const saveTo = path.join(os.tmpdir(), info.filename);
      file.pipe(fs.createWriteStream(saveTo));
      //envaindolo a ipfs
      let imageIpfsId = await this.nftService.uploadNftImage(info.filename);
      res.status(200).json({ image_ipfs_id: imageIpfsId });
    });
    req.pipe(bb);
  }

  @Post('metadata')
  async uploadMetadata(@Res() res: Response, @Req() req: Request) {
    let attributes: Array<Atributes> = req.body['attributes'];
    let description: string = req.body['description'];
    let name: string = req.body['name'];
    let imageIpfsId: string = req.body['image_ipfs_id'];

    let metadata: ImageMetadata = {
      attributes: attributes,
      description: description,
      name: name,
      image: `ipfs://${imageIpfsId}`,
    };

    console.log(metadata);
    let metadataIpfsId = await this.nftService.uploadNftMetadata(metadata);
    res.status(200).json({ metadata_ipfs_id: metadataIpfsId });
  }

  @Post('mint')
  async mintNft(@Res() res: Response, @Req() req: Request) {
    let metadataIpfsId: string = req.body['metadata_ipfs_id'];
    let addressTo: string = req.body['address_to'];

    let transactionId = await this.nftService.mintNft(metadataIpfsId, addressTo);
    res.status(200).json({ transactionHash: transactionId });
  }
}
