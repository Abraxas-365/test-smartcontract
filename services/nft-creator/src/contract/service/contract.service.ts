import { Inject, Injectable } from '@nestjs/common';
import { IContract } from '../infrastructure/contract/contract';
import { getAddressOfNftOwner } from './getAddressOfNftOwner';
import { getNumberOfNfts } from './getNumberOfNfts';
import { revokeNft } from './revokeNft';

export interface IContractService {
  getAddressOfNftOwner(nftId: number): Promise<string>;
  revokeNft(nftId: number): Promise<string>;
  getNumberOfNfts(): Promise<number>;
}

export const IContractService = Symbol('IContractService');

@Injectable({})
export class ContractService implements IContractService {
  constructor(@Inject(IContract) protected contract: IContract) {}

  getAddressOfNftOwner = getAddressOfNftOwner.bind(this);
  revokeNft = revokeNft.bind(this);
  getNumberOfNfts = getNumberOfNfts.bind(this);
}
