import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'auth/login',
      loginModel
    );
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'auth/register',
      registerModel
    );
  }

  update(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'auth/organize/user';
    return this.httpClient.post<ResponseModel>(newPath, user);
  }

  isAuthenticated() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
  }
}
