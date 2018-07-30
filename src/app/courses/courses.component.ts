import { Component, OnInit } from '@angular/core';
import { CourseService } from './services/course/course.service';
import { SearchPipe } from './pipes/search/search.pipe';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public searchValue = '';
  public coursesList;
  public isAddPageOpen = false;
  public length = 0;
  public pageIndex = 0;
  public pageSize = 5;

  constructor(private courseService: CourseService,
              private searchPipe: SearchPipe) { }

  ngOnInit() {
    this.coursesList = this.courseService.getCoursesList();
    this.length = this.searchPipe.transform(this.courseService.getCoursesList(), this.searchValue).length;
  }

  public search(searchValue): void {
    this.searchValue = searchValue;
    this.length = this.searchPipe.transform(this.courseService.getCoursesList(), this.searchValue).length;
  }

  public closePage(closeAddCoursePage): void {
    this.isAddPageOpen = !closeAddCoursePage;
  }

  public getPaginationData(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.length = this.searchPipe.transform(this.courseService.getCoursesList(), this.searchValue).length;
  }

  public delete() {
    this.length = this.searchPipe.transform(this.courseService.getCoursesList(), this.searchValue).length;
  }
}
