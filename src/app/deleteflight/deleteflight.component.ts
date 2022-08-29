import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Iflight } from '../iflight';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css'],
})
export class DeleteflightComponent implements OnInit {
  constructor(
    private adminService: AdminserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
