import { Contract } from './contract';

export async function revokeNft(this: Contract, nftId: number): Promise<string> {
  this.web3.eth.accounts.wallet.add(this.privateKey);

  const account = this.web3.eth.accounts.wallet[0].address;

  let res = await this.nftContract.methods.revoke(nftId).send({ from: account, gas: 500000 });

  return res.transactionHash;
}
