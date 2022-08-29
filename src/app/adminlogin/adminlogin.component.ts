import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { Iadminlogin } from '../iadminlogin';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  adminlogindata: Iadminlogin = {
    adminusername: '',
    adminpass: '',
    aid: 0,
  };
  constructor(private adminlog: AdminloginService, private router: Router) {}
  saveLogin() {
    this.adminlog.login(this.adminlogindata).subscribe(() => {
      alert('LoggedIn Successfull!');
      this.router.navigate(['List']);
    });
  }
  ngOnInit(): void {}
}
