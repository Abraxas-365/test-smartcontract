import { Injectable } from '@nestjs/common';
import { ImageMetadata } from 'src/nft/models/imageMetadata';
import { uploadImage } from './uploadImage';
import { uploadMetadata } from './uploadMetadata';

export interface IIpfsRepo {
  uploadMetadata(metadata: ImageMetadata): Promise<string>;
  uploadImage(fileName: string): Promise<string>;
}

export const IIpfsRepo = Symbol('IIpfsRepo');

@Injectable({})
export class IpfsRepo implements IIpfsRepo {
  apiKey = 'd9c398e5ee7b8ce69567';
  apiSecret = 'a3bface20eb99edd3ae4d7c9e26d882d043054041c1e6e632eaa35305596a5e5';

  constructor() {}

  uploadMetadata = uploadMetadata.bind(this);
  uploadImage = uploadImage.bind(this);
}
