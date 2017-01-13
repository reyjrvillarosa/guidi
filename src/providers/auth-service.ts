import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as EmailValidator from 'email-validator';

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
    currentUser: User;
 
  public login(credentials) {

    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    }
    
    // should have used regex to validate email
    if(!EmailValidator.validate(credentials.email))
    {
	alert('Please insert a valid email');
	return Observable.throw("Please insert a valid email");
    }
	
    // check password length - min is 4chars.
    if(credentials.password.length < 4) {
	alert("Password is too short");
        return Observable.throw("Password is too short");
    }
    else {
      return Observable.create(observer => {
        this.currentUser = new User(credentials.email, credentials.email);
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  

}
