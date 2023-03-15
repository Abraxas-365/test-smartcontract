"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintNft = void 0;
async function mintNft(metadataIpfsId, addressTo) {
    const nonce = await this.web3.eth.getTransactionCount(this.publicKey, 'latest');
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
exports.mintNft = mintNft;
//# sourceMappingURL=mintNft.js.map