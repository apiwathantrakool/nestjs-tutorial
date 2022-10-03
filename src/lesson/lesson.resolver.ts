import { LessonType } from './lesson.type';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'test01',
      name: 'English',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
