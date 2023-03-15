"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToIpfs = void 0;
const pinataSDK = require('@pinata/sdk');
const os = require('os');
const path = require('path');
const fs = require('fs');
async function uploadToIpfs(imageName, imageMetadata) {
    const pinata = pinataSDK(this.apiKey, this.apiSecret);
    try {
        const readableStreamForFile = fs.createReadStream(path.join(os.tmpdir(), imageName));
        let imageResult = await pinata.pinFileToIPFS(readableStreamForFile);
        console.log(imageResult);
        const options = {
            pinataMetadata: {
                name: imageMetadata.name,
            }
        };
        let metadataResult = await pinata.pinJSONToIPFS(imageMetadata, options);
        console.log("metadata", metadataResult);
    }
    catch (err) {
        console.log(err);
    }
}
exports.uploadToIpfs = uploadToIpfs;
//# sourceMappingURL=uploadToIpfs.js.map