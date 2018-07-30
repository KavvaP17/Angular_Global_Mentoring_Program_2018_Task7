import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
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
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Output() delete = new EventEmitter<void>();

  public courses: Array<Course> = [];

  public coursesArrayEmptyMsg = 'NO DATA, PLEASE CLICK ADD COURSE TO INSERT NEW CORSE';

  constructor(private courseService: CourseService,
              private searchPipe: SearchPipe) { }

  ngOnInit() {}

  ngOnChanges() {
    const searchCourses = this.searchPipe.transform(this.courseService.getCoursesList(), this.search);
    this.courses = searchCourses.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }


  public deleteCourse(id): void {
    this.courseService.removeCourse(id);
    const searchCourses = this.searchPipe.transform(this.courseService.getCoursesList(), this.search);
    this.courses = searchCourses.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
    this.delete.emit();
  }
}
