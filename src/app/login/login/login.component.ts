import { Component, OnInit } from '@angular/core';
import { User } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user = new User()
  user: User = new User()
  taskArr: User[] = []
  email: string
  password: string
  err = ''

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.email = ''
    this.password = ''

  }
  // getAllTask() {
  //   this.loginService.getUsers().subscribe(res => {
  //     this.taskArr = res;
  //   }, err => {
  //     err = 'Unable to Add Task'
  //   });
  // }

  onSubmit() {

    this.user.email = this.email;
    this.user.password = this.password;
    this.loginService.addUsers(this.user).subscribe(
      () => {
        console.log('User added successfully');
        this.ngOnInit()
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

}
