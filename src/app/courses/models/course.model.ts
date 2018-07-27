import {CourseInterface} from './course.interface';

export class Course implements CourseInterface {
  constructor(
    public id: number,
    public title: string,
    public creation: number,
    public duration: number,
    public description: string,
    public topRated: boolean
  ) {}
}
