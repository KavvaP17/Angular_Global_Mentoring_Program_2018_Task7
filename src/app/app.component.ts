import { Component, OnInit } from '@angular/core';
import { InitIconsService } from './core/services/init-icons/init-icons.service';
import { AuthService } from './auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private initIconsService: InitIconsService,
              private authService: AuthService) {}

  ngOnInit() {
    this.initIconsService.init();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
