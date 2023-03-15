import { ImageMetadata } from '../models/imageMetadata';
import { NftService } from './nft.service';

export async function uploadNftMetadata(this: NftService, metadata: ImageMetadata): Promise<string> {
  return await this.ipfsRepo.uploadMetadata(metadata);
}
