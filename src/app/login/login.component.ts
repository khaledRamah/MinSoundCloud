import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userService';
import { User } from '../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private auth_tooken = '1-30108-66632864-387641cb456d07e';
  constructor(private router: Router, private userService: UserService) { }

  currUser: User ;
  ngOnInit() {
  }
  login() {
    this.userService.getUserProfileData(this.auth_tooken).subscribe(soundCloudUser => {
    this.currUser = <User> soundCloudUser;
    this.userService.setUserInfo(soundCloudUser);
    this.userService.setOauthtoken(this.auth_tooken);
    this.router.navigate(['app-functionality-bar' + '/' + this.currUser.id]);
    });
  }
}
