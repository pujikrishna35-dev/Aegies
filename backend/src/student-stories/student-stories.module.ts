import { Module } from '@nestjs/common';
import { StudentStoriesController } from './student-stories.controller';
import { StudentStoriesService } from './student-stories.service';

@Module({
  controllers: [StudentStoriesController],
  providers: [StudentStoriesService],
  exports: [StudentStoriesService],
})
export class StudentStoriesModule {}
