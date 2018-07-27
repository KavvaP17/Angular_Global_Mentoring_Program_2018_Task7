import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Course } from '../courses/models/course.model';
import { CourseService } from './services/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public searchValue: string = '';
  public isAddPageOpen = false;

  // MatPaginator Inputs
  public length: Number = 100;
  public pageSize: Number = 10;
  public pageSizeOptions: Array<Number> = [5, 10, 25, 100];

  // MatPaginator Output
  public pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {}

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  public search(searchValue): void {
    this.searchValue = searchValue;
  }

  public closePage(closeAddCoursePage): void {
    this.isAddPageOpen = !closeAddCoursePage;
  }

}
