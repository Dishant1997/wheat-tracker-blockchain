import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { User } from '../_models/user';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use if testing without connecting to a blockchain service
  // users: User[];

  constructor(private httpClient: HttpClient, private api: ApiService, private userService: UserService, private router: Router) {
    // get all users in fake database. Use if testing without connecting to a blockchain service
    // this.users = userService.getAll();
  }

  baseUrl = "http://localhost:3000";


  register(user){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa('admin:adminpw')); 
    return this.httpClient.post(this.baseUrl + '/api/register-user', user, {headers:headers,responseType:'text'});
  }

  enroll(user){
    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', 'Basic ' + btoa(user.userid+':'+user.password)); 
    // return this.httpClient.post(this.baseUrl + '/api/sign-up-user', {userid:user.id,password:user.password,usertype:user.usertype}, {headers:headers,responseType:'text'});
    return this.httpClient.post(this.baseUrl + '/api/sign-up-user', {userid:user.userid,password:user.password,usertype:user.usertype,cnic:user.cnic, city:user.city});

  }

  logout() {
    this.api.clearOrders();
    // remove user from local storage to log user out
    this.userService.clearCurrentUser();
    localStorage.clear();
    console.log("called")
    this.router.navigate(['/login']);
  }

}
