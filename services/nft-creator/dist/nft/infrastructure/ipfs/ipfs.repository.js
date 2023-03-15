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
exports.IpfsRepo = exports.IIpfsRepo = void 0;
const common_1 = require("@nestjs/common");
const uploadImage_1 = require("./uploadImage");
const uploadMetadata_1 = require("./uploadMetadata");
exports.IIpfsRepo = Symbol('IIpfsRepo');
let IpfsRepo = class IpfsRepo {
    constructor() {
        this.apiKey = 'd9c398e5ee7b8ce69567';
        this.apiSecret = 'a3bface20eb99edd3ae4d7c9e26d882d043054041c1e6e632eaa35305596a5e5';
        this.uploadMetadata = uploadMetadata_1.uploadMetadata.bind(this);
        this.uploadImage = uploadImage_1.uploadImage.bind(this);
    }
};
IpfsRepo = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [])
], IpfsRepo);
exports.IpfsRepo = IpfsRepo;
//# sourceMappingURL=ipfs.repository.js.map