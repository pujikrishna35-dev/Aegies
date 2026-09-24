import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Get()
  findAll(@Query('country') country?: string, @Query('search') search?: string) {
    return this.universitiesService.findAll({ country, search });
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.universitiesService.findBySlug(slug);
  }

  @Post()
  create(@Body() createUniversityDto: any) {
    return this.universitiesService.create(createUniversityDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.universitiesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universitiesService.remove(id);
  }
}
