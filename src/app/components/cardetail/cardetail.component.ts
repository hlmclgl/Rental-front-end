import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carDetail: CarDetail;
  images: Image[] = [];
  imageUrl = environment.baseURL;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private ImageService: ImageService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getImagesByCar(params['carId']);
        this.getCarDetailsByCarId(params['carId']);
      }
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetail = response.data[0];
    });
  }
  getImagesByCar(carId: number) {
    this.ImageService.getImagesByCar(carId).subscribe((response) => {
      this.images = response.data;
    });
  }

  getBack() {
    this.carService.getCarDetails();
  }

  isLogOk() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.toastrService.error('Giriş yapmak zorundasınız');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
