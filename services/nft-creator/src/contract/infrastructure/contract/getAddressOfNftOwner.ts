import { Contract } from './contract';

export async function getAddressOfNftOwner(this: Contract, nftId: number): Promise<string> {
  let ownerAddress = await this.nftContract.methods.ownerOf(nftId).call();
  return ownerAddress;
}
