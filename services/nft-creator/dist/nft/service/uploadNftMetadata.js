"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadNftMetadata = void 0;
async function uploadNftMetadata(metadata) {
    return await this.ipfsRepo.uploadMetadata(metadata);
}
exports.uploadNftMetadata = uploadNftMetadata;
//# sourceMappingURL=uploadNftMetadata.js.map