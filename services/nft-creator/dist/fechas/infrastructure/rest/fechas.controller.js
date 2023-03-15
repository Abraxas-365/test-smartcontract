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
const fechas_service_1 = require("../../service/fechas.service");
let NftController = class NftController {
    constructor(fechasService) {
        this.fechasService = fechasService;
    }
    async getFechasAcendente(res) {
        let a = await this.fechasService.mintNft("D");
        res.status(200).json(a);
    }
};
__decorate([
    (0, common_1.Get)('mint'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NftController.prototype, "getFechasAcendente", null);
NftController = __decorate([
    (0, common_1.Controller)('nft'),
    __param(0, (0, common_1.Inject)(fechas_service_1.INftService)),
    __metadata("design:paramtypes", [Object])
], NftController);
exports.NftController = NftController;
//# sourceMappingURL=fechas.controller.js.map