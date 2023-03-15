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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.IContract = void 0;
const alchemy_web3_1 = require("@alch/alchemy-web3");
const common_1 = require("@nestjs/common");
const getAddressOfNftOwner_1 = require("./getAddressOfNftOwner");
const getNumberOfNfts_1 = require("./getNumberOfNfts");
const revokeNft_1 = require("./revokeNft");
exports.IContract = Symbol('IContract');
let Contract = class Contract {
    constructor() {
        this.contractAddress = '0xdC52790b3eEA32c71110007b15C2ACa6f1882399';
        this.contract = require('/Users/abraxas/Chamba/magia-contract/smartContract/artifacts/contracts/NewNFT.sol/MyToken.json');
        this.web3 = (0, alchemy_web3_1.createAlchemyWeb3)('https://polygon-mumbai.g.alchemy.com/v2/eF5ZSdI_QN11xi7VnLxT3LwpOYI4bM2B');
        this.publicKey = '0xA74Fd97Ed4561eA7e37EB0B22005f2Bd57Ec6b56';
        this.privateKey = 'f12968a9fbf37694f2265d1360fa7f9f06fba26181d4a0340a35c8ad9497e6e5';
        this.nftContract = new this.web3.eth.Contract(this.contract.abi, this.contractAddress);
        this.getAddressOfNftOwner = getAddressOfNftOwner_1.getAddressOfNftOwner.bind(this);
        this.revokeNft = revokeNft_1.revokeNft.bind(this);
        this.getNumberOfNfts = getNumberOfNfts_1.getNumberOfNfts.bind(this);
    }
};
Contract = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [])
], Contract);
exports.Contract = Contract;
//# sourceMappingURL=contract.js.map