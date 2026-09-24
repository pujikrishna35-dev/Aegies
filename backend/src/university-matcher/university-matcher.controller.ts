import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { UniversityMatcherService } from './university-matcher.service';
import { UniversityMatchSearchDto, UpdateWeightsDto } from './dto/university-match.dto';

@Controller('university-matcher')
export class UniversityMatcherController {
  constructor(private readonly matcherService: UniversityMatcherService) {}

  @Post('search')
  search(@Body() dto: UniversityMatchSearchDto) {
    return this.matcherService.searchMatches(dto);
  }

  @Get('config')
  getConfig() {
    return this.matcherService.getConfigOptions();
  }

  @Get('weights')
  getWeights() {
    return { weights: this.matcherService.getWeights() };
  }

  @Put('weights')
  updateWeights(@Body() dto: UpdateWeightsDto) {
    return this.matcherService.updateWeights(dto);
  }

  @Get('university/:slug')
  getUniversity(@Param('slug') slug: string) {
    return this.matcherService.getUniversityBySlug(slug);
  }
}
