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
exports.NftService = exports.INftService = void 0;
const common_1 = require("@nestjs/common");
const contract_1 = require("../infrastructure/contract/contract");
const ipfs_repository_1 = require("../infrastructure/ipfs/ipfs.repository");
const mintNft_1 = require("./mintNft");
const uploadNftImage_1 = require("./uploadNftImage");
const uploadNftMetadata_1 = require("./uploadNftMetadata");
exports.INftService = Symbol('INftService');
let NftService = class NftService {
    constructor(ipfsRepo, contract) {
        this.ipfsRepo = ipfsRepo;
        this.contract = contract;
        this.mintNft = mintNft_1.mintNft.bind(this);
        this.uploadNftImage = uploadNftImage_1.uploadNftImage.bind(this);
        this.uploadNftMetadata = uploadNftMetadata_1.uploadNftMetadata.bind(this);
    }
};
NftService = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, common_1.Inject)(ipfs_repository_1.IIpfsRepo)),
    __param(1, (0, common_1.Inject)(contract_1.IContract)),
    __metadata("design:paramtypes", [Object, Object])
], NftService);
exports.NftService = NftService;
//# sourceMappingURL=nft.service.js.map