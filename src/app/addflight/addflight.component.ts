import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Iflight } from '../iflight';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css'],
})
export class AddflightComponent implements OnInit {
  constructor(
    private adminService: AdminserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addFlight(value: Iflight) {
    console.log(value);
    this.adminService.addFlight(value).subscribe(
      () => {
        alert('Add flight successfully!!');
        this.router.navigate(['List']);
      },
      (err) => {
        alert('Something went wrong!!!');
        console.log(err);
      }
    );
  }
}
