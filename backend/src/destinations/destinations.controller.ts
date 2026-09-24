import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { DestinationsService } from './destinations.service';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly service: DestinationsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.service.findByCode(code);
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() dto: any) {
    return this.service.update(code, dto);
  }
}
