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
exports.ContractController = void 0;
const common_1 = require("@nestjs/common");
const contract_service_1 = require("../../service/contract.service");
let ContractController = class ContractController {
    constructor(contractService) {
        this.contractService = contractService;
    }
    async getAddressOfNftOwner(res, req) {
        let nftId = req.params['token'];
        let address = await this.contractService.getAddressOfNftOwner(Number(nftId));
        res.status(200).json({ address: address });
    }
    ;
    async getNumberOfNfts(res, req) {
        let numberOfNfts = await this.contractService.getNumberOfNfts();
        res.status(200).json({ number_if_nfts: numberOfNfts });
    }
    ;
    async revokeNft(res, req) {
        let nftId = req.params['token'];
        let numberOfNfts = await this.contractService.revokeNft(Number(nftId));
        res.status(200).json({ number_if_nfts: numberOfNfts });
    }
    ;
};
__decorate([
    (0, common_1.Get)('addressOf/:token'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "getAddressOfNftOwner", null);
__decorate([
    (0, common_1.Get)('numberOfNfts'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "getNumberOfNfts", null);
__decorate([
    (0, common_1.Post)('revoke/:token'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "revokeNft", null);
ContractController = __decorate([
    (0, common_1.Controller)('contract'),
    __param(0, (0, common_1.Inject)(contract_service_1.IContractService)),
    __metadata("design:paramtypes", [Object])
], ContractController);
exports.ContractController = ContractController;
//# sourceMappingURL=contract.controller.js.map