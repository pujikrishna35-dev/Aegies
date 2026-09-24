import { Controller, Get, Post, Delete, Body, Param, Query } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly service: MediaService) {}

  @Get()
  findAll(@Query('type') type?: string, @Query('search') search?: string) {
    return this.service.findAll({ type, search });
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
