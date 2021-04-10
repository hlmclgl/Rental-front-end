import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-organize',
  templateUrl: './user-organize.component.html',
  styleUrls: ['./user-organize.component.css'],
})
export class UserOrganizeComponent implements OnInit {
  editProfileForm: FormGroup;
  password: FormControl;
  email: string;
  user: User;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createProfileAddForm();
    console.log(this.user);
    this.getUser();
  }

  createProfileAddForm() {
    this.editProfileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getUser() {
    this.userService.getByMail(localStorage.getItem('email')!).subscribe(
      (response) => {
        this.user = response.data;
        this.editProfileForm.setValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: '',
        });
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
      }
    );
  }

  editProfile() {
    if (this.editProfileForm.valid) {
      let profileModel = Object.assign({}, this.editProfileForm.value);
      profileModel.id = this.user.userId;
      console.log(profileModel);
      this.authService.update(profileModel).subscribe(
        (response) => {
          this.toastrService.success('Lütfen tekrar giriş yapınız');
          this.router.navigate(['/login']);
          this.authService.logOut();
        },
        (responseError) => {
          this.toastrService.error(responseError.error);
        }
      );
    } else {
      this.toastrService.error('Bir hata oluştu.');
    }
  }
}
