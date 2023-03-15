"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const pinataSDK = require('@pinata/sdk');
const os = require('os');
const path = require('path');
const fs = require('fs');
async function uploadImage(imageName) {
    const pinata = pinataSDK(this.apiKey, this.apiSecret);
    try {
        const readableStreamForFile = fs.createReadStream(path.join(os.tmpdir(), imageName));
        let imageResult = await pinata.pinFileToIPFS(readableStreamForFile);
        console.log(imageResult);
        return imageResult.IpfsHash;
    }
    catch (err) {
        console.log(err);
    }
}
exports.uploadImage = uploadImage;
//# sourceMappingURL=uploadImage.js.map