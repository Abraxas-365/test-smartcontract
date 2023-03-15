import { ContractService } from './contract.service';

export async function revokeNft(this: ContractService, nftId: number): Promise<string> {
  return await this.contract.revokeNft(nftId);
}
