import { User } from '../Models/User';
import { StreamListComponent } from '../stream-list/stream-list.component';
import { UserService } from '../userService';
import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isIn = false;   // store state
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  toggleState() { // click handler
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  getUserName() {
    return (<User>this.userService.getUserInfo()).username === undefined ? 'Login' : (<User>this.userService.getUserInfo()).username;
  }

  getUserAvatar() {
    return (<User>this.userService.getUserInfo()).avatar_url === undefined ? '' : (<User>this.userService.getUserInfo()).avatar_url;
  }
}
