import { Injectable } from '@angular/core';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Array<Course> = [];

  constructor() {
    this.courses.push(
      new Course(1, 'AngularJS', Date.now() - 13 * 24 * 60 * 60 * 1000, 100,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, true)
    );
    this.courses.push(
      new Course(2, 'React', Date.now(), 200, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, false)
    );
    this.courses.push(
      new Course(3, 'Angular 2+', Date.now() + 13 * 24 * 60 * 60 * 1000, 120,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, false)
    );
    this.courses.push(
      new Course(4, 'Unit testing', Date.now() - 16 * 24 * 60 * 60 * 1000, 110,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, true)
    );
    this.courses.push(
      new Course(5, 'Paterns', Date.now() - 16 * 24 * 60 * 60 * 1000, 90,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, true)
    );
    this.courses.push(
      new Course(6, 'Scrum for begginers', Date.now() + 16 * 24 * 60 * 60 * 1000, 10,
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, false)
    );
  }

  getCoursesList() {
    return this.courses;
  }

  createCourse(title: string, creation: number, duration: number, description: string) {
    const id = Date.now();
    const newCourse = new Course(id, title, creation, duration, description, false);
    this.courses.push(newCourse);
  }

  getCourseById(id): Course {
    return this.courses.find(course => course.id === id);
  }

  updateCourse(id: number, title: string, creation: number, duration: number, description: string, topRated: boolean) {
    const course = this.getCourseById(id);
    course.title = title;
    course.creation = creation;
    course.duration = duration;
    course.description = description;
    course.topRated = topRated;
  }

  removeCourse(id: number) {
    this.courses = this.courses.filter((item) => item.id !== id);
  }
}
