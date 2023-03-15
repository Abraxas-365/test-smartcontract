import { Inject, Injectable } from '@nestjs/common';
import { IContract } from '../infrastructure/contract/contract';
import { IIpfsRepo } from '../infrastructure/ipfs/ipfs.repository';
import { ImageMetadata } from '../models/imageMetadata';
import { mintNft } from './mintNft';
import { uploadNftImage } from './uploadNftImage';
import { uploadNftMetadata } from './uploadNftMetadata';

export interface INftService {
  uploadNftMetadata(metadata: ImageMetadata): Promise<string>;
  uploadNftImage(fileName: string): Promise<string>;
  mintNft(ipfsMetadataId: string, addressTo: string): Promise<string>;
}

export const INftService = Symbol('INftService');

@Injectable({})
export class NftService implements INftService {
  constructor(@Inject(IIpfsRepo) protected ipfsRepo: IIpfsRepo, @Inject(IContract) protected contract: IContract) {}
  mintNft = mintNft.bind(this);
  uploadNftImage = uploadNftImage.bind(this);
  uploadNftMetadata = uploadNftMetadata.bind(this);
}
