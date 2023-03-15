"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMetadata = void 0;
const pinataSDK = require('@pinata/sdk');
const os = require('os');
const path = require('path');
const fs = require('fs');
async function uploadMetadata(imageMetadata) {
    const pinata = pinataSDK(this.apiKey, this.apiSecret);
    try {
        const options = {
            pinataMetadata: {
                name: imageMetadata.name,
            },
        };
        let metadataResult = await pinata.pinJSONToIPFS(imageMetadata, options);
        console.log('metadata', metadataResult);
        return metadataResult.IpfsHash;
    }
    catch (err) {
        console.log(err);
    }
}
exports.uploadMetadata = uploadMetadata;
//# sourceMappingURL=uploadMetadata.js.map