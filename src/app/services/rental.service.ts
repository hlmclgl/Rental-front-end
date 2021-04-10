import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<RentalDetail>> {
    let newUrl = this.apiUrl + 'rentacars/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'rentacars/add',
      rental
    );
  }
}
