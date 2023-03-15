"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftController = void 0;
const common_1 = require("@nestjs/common");
const nft_service_1 = require("../../service/nft.service");
const busboy = require('busboy');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('d9c398e5ee7b8ce69567', 'a3bface20eb99edd3ae4d7c9e26d882d043054041c1e6e632eaa35305596a5e5');
const os = require('os');
const fs = require('fs');
const path = require('path');
let NftController = class NftController {
    constructor(nftService) {
        this.nftService = nftService;
    }
    async uploadImage(res, req) {
        const bb = busboy({ headers: req.headers });
        bb.on('file', async (name, file, info) => {
            const saveTo = path.join(os.tmpdir(), info.filename);
            file.pipe(fs.createWriteStream(saveTo));
            let imageIpfsId = await this.nftService.uploadNftImage(info.filename);
            res.status(200).json({ image_ipfs_id: imageIpfsId });
        });
        req.pipe(bb);
    }
    async uploadMetadata(res, req) {
        let attributes = req.body['attributes'];
        let description = req.body['description'];
        let name = req.body['name'];
        let imageIpfsId = req.body['image_ipfs_id'];
        let metadata = {
            attributes: attributes,
            description: description,
            name: name,
            image: `ipfs://${imageIpfsId}`,
        };
        console.log(metadata);
        let metadataIpfsId = await this.nftService.uploadNftMetadata(metadata);
        res.status(200).json({ metadata_ipfs_id: metadataIpfsId });
    }
    async mintNft(res, req) {
        let metadataIpfsId = req.body['metadata_ipfs_id'];
        let addressTo = req.body['address_to'];
        let transactionId = await this.nftService.mintNft(metadataIpfsId, addressTo);
        res.status(200).json({ transactionHash: transactionId });
    }
};
__decorate([
    (0, common_1.Post)('image'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('metadata'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "uploadMetadata", null);
__decorate([
    (0, common_1.Post)('mint'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "mintNft", null);
NftController = __decorate([
    (0, common_1.Controller)('nft'),
    __param(0, (0, common_1.Inject)(nft_service_1.INftService)),
    __metadata("design:paramtypes", [Object])
], NftController);
exports.NftController = NftController;
//# sourceMappingURL=nft.controller.js.map