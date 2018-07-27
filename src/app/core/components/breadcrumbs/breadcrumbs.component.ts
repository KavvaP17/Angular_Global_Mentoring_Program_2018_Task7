import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { CourseService } from '../../../courses/services/course/course.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.routerState.snapshot.url.split('/');
        const id = +currentUrl[currentUrl.length-1];
        if (id) {
          const course = this.courseService.getCourseById(id);
          if (course) {
            this.breadcrumbs = ` / ${course.title}`;
          } else {
            this.breadcrumbs = '';
          }
        } else if (currentUrl[currentUrl.length-1] === 'new') {
          this.breadcrumbs = ' / Add new course';
        } else {
          this.breadcrumbs = '';
        }
      }
    });
  }
}

