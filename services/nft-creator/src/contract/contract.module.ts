import { Module } from '@nestjs/common';
import { Contract, IContract } from './infrastructure/contract/contract';
import { ContractController } from './infrastructure/rest/contract.controller';
import { ContractService, IContractService } from './service/contract.service';

@Module({
  controllers: [ContractController],
  providers: [
    {
      provide: IContract,
      useClass: Contract,
    },
    {
      provide: IContractService,
      useClass: ContractService,
    },
  ],
})
export class ContractModule {}
