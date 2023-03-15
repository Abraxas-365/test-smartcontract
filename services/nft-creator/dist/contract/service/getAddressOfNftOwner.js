"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressOfNftOwner = void 0;
async function getAddressOfNftOwner(nftId) {
    return await this.contract.getAddressOfNftOwner(nftId);
}
exports.getAddressOfNftOwner = getAddressOfNftOwner;
//# sourceMappingURL=getAddressOfNftOwner.js.map