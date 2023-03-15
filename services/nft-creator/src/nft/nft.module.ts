import { Module } from '@nestjs/common';
import { Contract, IContract } from './infrastructure/contract/contract';
import { IIpfsRepo, IpfsRepo } from './infrastructure/ipfs/ipfs.repository';
import { NftController } from './infrastructure/rest/nft.controller';
import { INftService, NftService } from './service/nft.service';

@Module({
  controllers: [NftController],
  providers: [
    {
      provide: IIpfsRepo,
      useClass: IpfsRepo,
    },
    {
      provide: IContract,
      useClass: Contract,
    },
    {
      provide: INftService,
      useClass: NftService,
    },
  ],
})
export class NftModule {}
