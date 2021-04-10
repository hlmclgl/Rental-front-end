import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorAndBrand(
    colorId: number,
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath =
      this.apiUrl +
      'cars/getcardetailsbycolorandbrand?colorId=' +
      colorId +
      '&brandId=' +
      brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car: CarDetail): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/add';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  update(car: CarDetail): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/update';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}
