import { ContractService } from './contract.service';

export async function getAddressOfNftOwner(this: ContractService, nftId: number): Promise<string> {
  return await this.contract.getAddressOfNftOwner(nftId);
}
