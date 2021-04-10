import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isLogOK() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    return localStorage.getItem('fullName');
  }

  logOut() {
    this.authService.logOut();
    this.toastrService.info('Çıkış yapıldı');
    this.router.navigate(['/cars']);
  }
}
