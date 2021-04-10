import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentalAddForm: FormGroup;

  rentals: Rental[] = [];
  customers: Customer[];

  customerId: number;
  rentDate: Date;
  returnDate: Date;

  @Input() car: CarDetail;

  constructor(
    private rentalService: RentalService,
    private router: Router,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
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

  getDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10);
  }

  add() {
    let rental: Rental = {
      carId: this.car.id,
      customerId: parseInt(this.customerId.toString()),
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };

    this.rentalService.add(rental).subscribe(
      (data) => {
        this.toastrService.info('Ödeme sayfasına yönlendiriliyorsunuz!!');
        this.toastrService.success('Kiralama İşlemi Başarılı');
        this.router.navigate(['/payment', JSON.stringify(rental)]);
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
        this.toastrService.error(responseError.Message);
      }
    );
  }
}
