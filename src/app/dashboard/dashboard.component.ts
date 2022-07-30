import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardEtailComponent } from './dashboard-etail/dashboard-etail.component';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentRate = 8;
  countries: Country[] = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'India',
      flag: "4/41/Flag_of_India.svg",
      area: 3287263,
      population: 1324171354
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
  ];

  constructor(private modalService: NgbModal) { }

  open(country: Country) {
    const modalRef = this.modalService.open(DashboardEtailComponent);
    modalRef.componentInstance.country = country;
  }
  ngOnInit(): void {
  }

}
