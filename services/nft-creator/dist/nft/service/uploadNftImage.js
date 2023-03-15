"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadNftImage = void 0;
async function uploadNftImage(fileName) {
    return await this.ipfsRepo.uploadImage(fileName);
}
exports.uploadNftImage = uploadNftImage;
//# sourceMappingURL=uploadNftImage.js.map