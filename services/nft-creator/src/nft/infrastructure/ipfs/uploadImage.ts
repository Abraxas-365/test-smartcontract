import { ImageMetadata } from 'src/nft/models/imageMetadata';
import { IPinataResp } from 'src/nft/models/pinataResp';
const pinataSDK = require('@pinata/sdk');
const os = require('os');
const path = require('path');
const fs = require('fs');
//TODO poner esto en docker-compose
import { IpfsRepo } from './ipfs.repository';

export async function uploadImage(this: IpfsRepo, imageName: string): Promise<string> {
  const pinata = pinataSDK(this.apiKey, this.apiSecret);

  try {
    const readableStreamForFile = fs.createReadStream(path.join(os.tmpdir(), imageName));

    //subiendo la imagen
    let imageResult: IPinataResp = await pinata.pinFileToIPFS(readableStreamForFile);

    console.log(imageResult);
    return imageResult.IpfsHash;
  } catch (err: unknown) {
    console.log(err);
  }
}
