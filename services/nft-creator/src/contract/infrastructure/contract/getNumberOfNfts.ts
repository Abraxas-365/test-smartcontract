import { Contract } from './contract';

export async function getNumberOfNfts(this: Contract): Promise<string> {
  let numberOfNfts = await this.nftContract.methods.getIdCount().call();
  return numberOfNfts;
}
