import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public hide = true;
  public userLogin = '';
  public userPassword = '';

  @Output() authenticated = new EventEmitter<boolean>();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.userLogin && this.userPassword) {
      this.authService.login(this.userLogin, this.userPassword);
      this.router.navigate(['/courses']);
    }
  }

}
