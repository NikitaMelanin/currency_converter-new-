import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }
              
  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
      },
      err => console.log(err)
    )      
  }

}
