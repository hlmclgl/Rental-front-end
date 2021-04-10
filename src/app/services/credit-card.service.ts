import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  apiUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  add(card: CreditCard): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'creditcards/add';
    return this.httpClient.post<ResponseModel>(newPath, card);
  }

  update(card: CreditCard): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'creditcards/update';
    return this.httpClient.post<ResponseModel>(newPath, card);
  }

  delete(card: CreditCard): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'creditcards/delete';
    return this.httpClient.post<ResponseModel>(newPath, card);
  }

  getByCustomerId(id: number): Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'creditcards/getbycustomer?id=' + id;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
}
