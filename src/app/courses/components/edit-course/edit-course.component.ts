import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { CourseService } from '../../services/course/course.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  public id;
  public courseTitle = '';
  public courseDescription = '';
  public courseDuration = 0;
  public courseDate;
  public courseAuthors = '';
  public topRated = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      const course = this.courseService.getCourseById(this.id);
      if (course) {
        this.courseTitle = course.title;
        this.courseDescription = course.description;
        this.courseDuration = course.duration;
        this.courseDate = new FormControl(new Date(course.creation));
        this.topRated = course.topRated;
        this.courseAuthors = '';
      } else {
        this.router.navigate(['courses']);
      }
    })
  }

  cancel() {
    this.router.navigate(['courses']);
  }

  save() {
    this.courseService.updateCourse(this.id,this.courseTitle, +this.courseDate.value, this.courseDuration, this.courseDescription, this.topRated);
    this.router.navigate(['courses']);
  }

}
