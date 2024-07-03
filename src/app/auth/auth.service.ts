import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasLoggedInUser());
  loggedInStatus = this.loggedIn.asObservable();

  constructor() {}

  private hasLoggedInUser(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  login(email: string) {
    localStorage.setItem('loggedInUser', JSON.stringify({ email }));
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedIn.next(false);
  }
}
