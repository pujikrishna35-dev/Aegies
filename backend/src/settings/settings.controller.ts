import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':category')
  getByCategory(@Param('category') category: string) {
    return this.service.getByCategory(category);
  }

  @Put(':category')
  updateCategory(@Param('category') category: string, @Body() body: any) {
    return this.service.updateCategory(category, body);
  }
}
