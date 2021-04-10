import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserOrganizeComponent } from './components/user-organize/user-organize.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"customers",component:CustomerComponent, canActivate:[LoginGuard]},
  {path:"rentals",component:RentalDetailComponent, canActivate:[LoginGuard]},
  {path:"rentals/:carId",component:RentalComponent, canActivate:[LoginGuard]},
  {path:"payment/:rental",component:PaymentComponent, canActivate:[LoginGuard]},
  {path:"detail/:carId",component:CardetailComponent},
  {path:"cars/detail/:carId",component:CardetailComponent},
  {path:"cars/filter/brand/:brandId/color/:colorId",component:CarComponent},
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/update/:carId", component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"organize/user",component:UserOrganizeComponent, canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
