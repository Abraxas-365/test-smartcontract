import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { Injectable } from '@nestjs/common';
import { mintNft } from './mintNft';

export interface IContract {
  mintNft(metadataIpfsId: string, addressTo: string): Promise<string>;
}

export const IContract = Symbol('IContract');

@Injectable({})
export class Contract implements IContract {
  protected contractAddress = '0xdC52790b3eEA32c71110007b15C2ACa6f1882399';
  protected contract = require('path/smartContract/artifacts/contracts/NewNFT.sol/MyToken.json');
  protected web3 = createAlchemyWeb3(
    'https://polygon-mumbai.g.alchemy.com/v2/eF5ZSdI_QN11xi7VnLxT3LwpOYI4bM2B',
  ); //alchemy api
  protected publicKey = '0xA74Fd97Ed4561eA7e37EB0B22005f2Bd57Ec6b56';
  protected privateKey = '<privateKey>';
  protected nftContract = new this.web3.eth.Contract(
    this.contract.abi,
    this.contractAddress,
  );

  constructor() {}
  mintNft = mintNft.bind(this);
}
