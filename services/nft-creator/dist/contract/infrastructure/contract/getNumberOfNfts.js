"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfNfts = void 0;
async function getNumberOfNfts() {
    let numberOfNfts = await this.nftContract.methods.getIdCount().call();
    return numberOfNfts;
}
exports.getNumberOfNfts = getNumberOfNfts;
//# sourceMappingURL=getNumberOfNfts.js.map