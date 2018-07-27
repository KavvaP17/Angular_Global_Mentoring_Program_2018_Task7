import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public courseTitle = '';
  public courseDescription = '';
  public courseDuration = 0;
  public courseDate;
  public courseAuthors = '';

  constructor(private router: Router,
              private courseService : CourseService) { }

  ngOnInit() {
  }

  public close() {
    this.router.navigate(['courses']);
  }

  public save() {
    this.courseService.createCourse(this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription);
    this.router.navigate(['courses']);
  }
  

}
