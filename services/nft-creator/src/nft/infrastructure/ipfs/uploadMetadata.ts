import { ImageMetadata } from 'src/nft/models/imageMetadata';
import { IPinataResp } from 'src/nft/models/pinataResp';
const pinataSDK = require('@pinata/sdk');
const os = require('os');
const path = require('path');
const fs = require('fs');
//TODO poner esto en docker-compose
import { IpfsRepo } from './ipfs.repository';

export async function uploadMetadata(this: IpfsRepo, imageMetadata: ImageMetadata): Promise<string> {
  const pinata = pinataSDK(this.apiKey, this.apiSecret);

  try {
    const options = {
      pinataMetadata: {
        name: imageMetadata.name,
      },
    };

    //subiendo la metadata del la imagen para la creacian del nft
    let metadataResult: IPinataResp = await pinata.pinJSONToIPFS(imageMetadata, options);
    console.log('metadata', metadataResult);
    return metadataResult.IpfsHash;
  } catch (err: unknown) {
    console.log(err);
  }
}
