"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintNft = void 0;
async function mintNft(metadataIpfsId, addressTo) {
    return await this.contract.mintNft(metadataIpfsId, addressTo);
}
exports.mintNft = mintNft;
//# sourceMappingURL=mintNft.js.map