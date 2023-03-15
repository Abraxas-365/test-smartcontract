import { ContractService } from './contract.service';

export async function getNumberOfNfts(this: ContractService): Promise<number> {
  return await this.contract.getNumberOfNfts();
}
