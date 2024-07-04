import {Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veb-prodavnica';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedInStatus.subscribe(status => {
      this.isLoggedIn = status;
  });
  }

  logout() {
    this.authService.logout();

  }
}
