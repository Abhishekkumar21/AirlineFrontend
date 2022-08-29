import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Iflight } from '../iflight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  flightlist: Iflight[] = [];

  constructor(private adminService: AdminserviceService) {
    this.getFlights();
  }

  ngOnInit(): void {}
  getFlights() {
    this.adminService.getflightlist().subscribe((data) => {
      this.flightlist = data;
    });
  }
  delete(id: number, name: string) {
    if (confirm(`Are you sure to delete ${name}?`)) {
      this.adminService.deleteflight(id).subscribe(
        () => {
          alert('Delete flight successfully!!');
          this.getFlights();
        },
        (err) => {
          alert('Something went wrong!!!');
          console.log(err);
        }
      );
    }
  }
}
