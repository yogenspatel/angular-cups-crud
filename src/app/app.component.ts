import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }
  title = 'cups-crud-app';
  loggedInAs: User;

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.authenticationService.currentUser.subscribe((currentUser) => {
      this.loggedInAs = currentUser;
    });
  }
}
