import { Module } from '@nestjs/common';
import { ContractModule } from './contract/contract.module';
import { NftModule } from './nft/nft.module';

@Module({
  imports: [NftModule, ContractModule],
})
export class AppModule {}
