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
exports.ContractService = exports.IContractService = void 0;
const common_1 = require("@nestjs/common");
const contract_1 = require("../infrastructure/contract/contract");
const getAddressOfNftOwner_1 = require("./getAddressOfNftOwner");
const getNumberOfNfts_1 = require("./getNumberOfNfts");
const revokeNft_1 = require("./revokeNft");
exports.IContractService = Symbol('IContractService');
let ContractService = class ContractService {
    constructor(contract) {
        this.contract = contract;
        this.getAddressOfNftOwner = getAddressOfNftOwner_1.getAddressOfNftOwner.bind(this);
        this.revokeNft = revokeNft_1.revokeNft.bind(this);
        this.getNumberOfNfts = getNumberOfNfts_1.getNumberOfNfts.bind(this);
    }
};
ContractService = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, common_1.Inject)(contract_1.IContract)),
    __metadata("design:paramtypes", [Object])
], ContractService);
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map