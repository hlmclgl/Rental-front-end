import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/registerModel';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      let registerModel: RegisterModel = Object.assign(
        {},
        this.registerForm.value
      );
      this.authService.register(registerModel).subscribe(
        (response) => {
          localStorage.setItem('token', response.data.token);
          this.getUserByMail(registerModel.email);
          this.toastrService.info(response.message);
          this.router.navigate(['/login']);
        },
        (errorResponse) => {
          this.toastrService.error(errorResponse.error);
        }
      );
    } else {
      this.toastrService.warning('Bir hata oluştu');
    }
  }

  getUserByMail(email: string) {
    this.userService.getByMail(email).subscribe((response) => {
      this.user = response.data;
    });
  }
}
