import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

constructor(private userService: UserService){}

ngOnInit(): void {
  this.userService.getUsers();
}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (this.userService.userExists(email, password)) {
      console.log('User exists');
    } else {
      window.alert("Wrong email or password!")
      console.log('User does not exist');
    }
  }
}
