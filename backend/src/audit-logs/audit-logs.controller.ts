import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';

@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly service: AuditLogsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  logAction(@Body() body: any) {
    return this.service.create(body);
  }
}
