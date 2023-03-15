import { NftService } from './nft.service';
export async function mintNft(this: NftService, metadataIpfsId: string, addressTo: string): Promise<string> {
  return await this.contract.mintNft(metadataIpfsId, addressTo);
}
