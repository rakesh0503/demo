import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
@Component({
  selector: 'app-dashboard-etail',
  templateUrl: './dashboard-etail.component.html',
  styleUrls: ['./dashboard-etail.component.scss']
})
export class DashboardEtailComponent implements OnInit {

  @Input() country!: Country;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
