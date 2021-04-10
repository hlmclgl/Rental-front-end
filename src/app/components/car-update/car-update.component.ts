import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  updateCarForm: FormGroup;
  updateCar: CarDetail;
  id: number;
  brands: Brand[] = [];
  colors: Color[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private brandService: BrandService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['carId']) {
        this.id = param['carId'];
        this.getCarById(param['carId']);
        this.getColors();
        this.getBrands();
        this.createForm();
      }
    });
  }

  createForm() {
    this.updateCarForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      model: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      minFindexScore: ['', Validators.required],
    });
  }

  update() {
    if (this.updateCarForm.valid) {
      let carModel = Object.assign({}, this.updateCarForm.value);
      carModel.brandId = parseInt(carModel.brandId);
      carModel.colorId = parseInt(carModel.colorId);
      carModel.id = parseInt(this.id + '');

      this.carService.update(carModel).subscribe(
        (response) => {
          this.toastrService.success('Araç Güncellendi', 'İşlem Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Bir hata oluştu'
              );
            }
          }
        }
      );
    }
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCarById(id: number) {
    this.carService.getCarDetailsById(id).subscribe((response) => {
      this.updateCar = response.data[0];
    });
  }
}
