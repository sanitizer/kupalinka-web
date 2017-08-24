import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userLoggedIn: boolean;
  private name: string;

  constructor() {
    this.userLoggedIn = true;
  }

  checkIfUserLoggedIn(userName: string, password: string) {
    if (userName == "admin" && password == "test") {
      this.userLoggedIn = true;
    }

    this.name = userName;
  }

  loggedOut() {
    this.userLoggedIn = false;
  }

  isLoggedIn() {
    return this.userLoggedIn;
  }

}
