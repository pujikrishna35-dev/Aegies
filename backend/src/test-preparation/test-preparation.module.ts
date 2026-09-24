import { Module } from '@nestjs/common';
import { TestPreparationController } from './test-preparation.controller';
import { TestPreparationService } from './test-preparation.service';

@Module({
  controllers: [TestPreparationController],
  providers: [TestPreparationService],
  exports: [TestPreparationService],
})
export class TestPreparationModule {}
