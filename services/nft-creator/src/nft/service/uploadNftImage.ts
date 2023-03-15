import { NftService } from './nft.service';

export async function uploadNftImage(this: NftService, fileName: string): Promise<string> {
  return await this.ipfsRepo.uploadImage(fileName);
}
