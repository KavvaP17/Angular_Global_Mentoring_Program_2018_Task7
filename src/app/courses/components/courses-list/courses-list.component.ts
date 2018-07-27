import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../courses/models/course.model';
import { CourseService } from '../../services/course/course.service';
import { SearchPipe } from '../../pipes/search/search.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input() search: string;
  public courses: Array<Course> = [];

  public coursesArrayEmptyMsg = 'NO DATA, PLEASE CLICK ADD COURSE TO INSERT NEW CORSE';

  constructor(private courseService: CourseService,
              private searchPipe: SearchPipe) { }

  ngOnInit() {
    this.courses = this.courseService.getCoursesList();
  }

  ngOnChanges() {
    this.courses = this.searchPipe.transform(this.courseService.getCoursesList(), this.search);
  }


  public deleteCourse(id): void {
    this.courseService.removeCourse(id);
    this.courses = this.searchPipe.transform(this.courseService.getCoursesList(), this.search);
  }
}
