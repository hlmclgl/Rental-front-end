import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newUrl = this.apiUrl + 'customers/getcustomerdetails';
    return this.httpClient.get<ListResponseModel<Customer>>(newUrl);
  }

  add(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'customers/add';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }

  delete(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'customers/delete';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }

  update(customer: Customer): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'customers/update';
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }

  getCustomerById(id: number): Observable<SingleResponseModel<Customer>> {
    let path = this.apiUrl + 'customers/getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Customer>>(path);
  }

  getCustomerByUserId(id: number): Observable<ListResponseModel<Customer>> {
    let path = this.apiUrl + 'customers/getcustomerdetailbyuser?userid=' + id;
    return this.httpClient.get<ListResponseModel<Customer>>(path);
  }
}
