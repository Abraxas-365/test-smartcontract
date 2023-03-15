"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeNft = void 0;
async function revokeNft(nftId) {
    this.web3.eth.accounts.wallet.add(this.privateKey);
    const account = this.web3.eth.accounts.wallet[0].address;
    let res = await this.nftContract.methods.revoke(nftId).send({ from: account, gas: 500000 });
    return res.transactionHash;
}
exports.revokeNft = revokeNft;
//# sourceMappingURL=revokeNft.js.map