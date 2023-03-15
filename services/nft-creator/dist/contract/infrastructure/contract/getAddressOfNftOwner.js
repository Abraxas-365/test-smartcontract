"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressOfNftOwner = void 0;
async function getAddressOfNftOwner(nftId) {
    let ownerAddress = await this.nftContract.methods.ownerOf(nftId).call();
    return ownerAddress;
}
exports.getAddressOfNftOwner = getAddressOfNftOwner;
//# sourceMappingURL=getAddressOfNftOwner.js.map