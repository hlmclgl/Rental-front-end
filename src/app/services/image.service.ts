import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl = environment.apiURL;

  constructor(private HttpClient: HttpClient) {}

  getCarImages(): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + 'carImage/getall';
    return this.HttpClient.get<ListResponseModel<Image>>(newPath);
  }
  getImagesByCar(carId: number): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + 'carImage/getimagesbycarid?carId=' + carId;
    return this.HttpClient.get<ListResponseModel<Image>>(newPath);
  }
}
