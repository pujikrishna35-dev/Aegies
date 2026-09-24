import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ScholarshipsService } from './scholarships.service';

@Controller('scholarships')
export class ScholarshipsController {
  constructor(private readonly service: ScholarshipsService) {}

  @Get()
  findAll(@Query('country') country?: string) {
    return this.service.findAll({ country });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
