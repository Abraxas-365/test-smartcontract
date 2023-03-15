"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftModule = void 0;
const common_1 = require("@nestjs/common");
const contract_1 = require("./infrastructure/contract/contract");
const ipfs_repository_1 = require("./infrastructure/ipfs/ipfs.repository");
const nft_controller_1 = require("./infrastructure/rest/nft.controller");
const nft_service_1 = require("./service/nft.service");
let NftModule = class NftModule {
};
NftModule = __decorate([
    (0, common_1.Module)({
        controllers: [nft_controller_1.NftController],
        providers: [
            {
                provide: ipfs_repository_1.IIpfsRepo,
                useClass: ipfs_repository_1.IpfsRepo,
            },
            {
                provide: contract_1.IContract,
                useClass: contract_1.Contract,
            },
            {
                provide: nft_service_1.INftService,
                useClass: nft_service_1.NftService,
            },
        ],
    })
], NftModule);
exports.NftModule = NftModule;
//# sourceMappingURL=nft.module.js.map