import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CreditCard } from 'src/app/models/creditCard';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  rental: Rental;
  car: CarDetail;
  amount: number;
  imageUrl = environment.baseURL;

  cardNumber: string;
  nameOnTheCard: string;
  expirationDate: string;
  cvv: number;
  cardId: number;

  creditCards: CreditCard[] = [];
  creditCardAddform: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router,
    private toastr: ToastrService,
    private paymentService: PaymentService,
    private creditCardService: CreditCardService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['rental']) {
        this.rental = JSON.parse(params['rental']);
        this.getCars();
        this.getCardByCustomer();
        this.createCreditCardAddForm();
      }
    });
  }

  createCreditCardAddForm() {
    this.creditCardAddform = this.formBuilder.group({
      customerCards: ['', Validators.required],
      nameOnTheCard: ['', Validators.required, Validators.maxLength(20)],
      cardNumber: ['', Validators.required, Validators.maxLength(16)],
      cvv: ['', Validators.required, Validators.maxLength(3)],
      expirationDate: ['', Validators.required, Validators.maxLength(5)],
    });
  }

  save() {
    let cardModel: CreditCard = {
      cardNumber: this.cardNumber,
      nameOnTheCard: this.nameOnTheCard,
      expirationDate: this.expirationDate,
      cvv: this.cvv,
      customerId: this.rental.customerId,
    };
    this.creditCardService.add(cardModel).subscribe(
      (response) => {
        this.toastr.success('Kart kaydedildi');
        this.payment();
      },
      (responseError) => {
        this.toastr.error('Hata', responseError.error);
      }
    );
  }

  getCardByCustomer() {
    this.creditCardService
      .getByCustomerId(this.rental.customerId)
      .subscribe((response) => {
        this.creditCards = response.data;
        this.creditCards.forEach((response) => {
          this.cardNumber = response.cardNumber;
          this.nameOnTheCard = response.nameOnTheCard;
          this.expirationDate = response.expirationDate;
          this.cvv = response.cvv;
        });
      });
  }

  setCardInfos() {
    this.creditCardAddform.patchValue({
      cardNumber: this.cardNumber,
      nameOnTheCard: this.nameOnTheCard,
      expirationDate: this.expirationDate,
      cvv: this.cvv,
    });
  }

  getCars() {
    this.carService
      .getCarDetailsById(this.rental.carId)
      .subscribe((response) => {
        this.car = response.data[0];
        this.totalPayment();
      });
  }

  totalPayment() {
    if (this.rental.returnDate != null) {
      let dateRent = new Date(this.rental.returnDate.toString());
      let dateReturn = new Date(this.rental.rentDate.toString());

      let difference = dateRent.getTime() - dateReturn.getTime();

      let numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));

      if (numberOfDays == 0) {
        numberOfDays = 1;
      }

      this.amount =
        numberOfDays * (this.car.dailyPrice + (this.car.dailyPrice * 18) / 100);

      if (this.amount <= 0) {
        this.router.navigate(['/cars']);
        this.toastr.error('Ödeme Hatası');
      }
    }
  }

  //Payment test
  payment() {
    if (this.amount > 100) {
      let paymentModel: Payment = {
        amount: this.amount,
      };
      this.paymentService.payment(paymentModel).subscribe(
        (response) => {
          this.toastr.success('Ödeme Başarılı');
        },
        (error) => {
          this.toastr.error(error.error);
        }
      );
    }
  }
}
