import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiURL + 'users/';

  constructor(private httpClient: HttpClient) {}

  getByMail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'getbymail?email=' + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getUserById(userId: number): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + 'getbyid?id=' + userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
}
