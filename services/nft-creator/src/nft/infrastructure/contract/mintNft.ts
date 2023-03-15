import { Contract } from './contract';

export async function mintNft(this: Contract, metadataIpfsId: string, addressTo: string): Promise<string> {
  const nonce = await this.web3.eth.getTransactionCount(this.publicKey, 'latest'); //get latest nonce

  //the transaction
  const tx = {
    from: this.publicKey,
    to: this.contractAddress,
    nonce: nonce,
    gas: 500000,
    data: this.nftContract.methods.safeMint(addressTo, `ipfs://${metadataIpfsId}`).encodeABI(),
  };

  const { rawTransaction } = await this.web3.eth.accounts.signTransaction(tx, this.privateKey);

  let transactionId = await this.web3.eth.sendSignedTransaction(rawTransaction);
  return transactionId.transactionHash;
}
