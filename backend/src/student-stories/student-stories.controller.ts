import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentStoriesService } from './student-stories.service';

@Controller('student-stories')
export class StudentStoriesController {
  constructor(private readonly service: StudentStoriesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
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
