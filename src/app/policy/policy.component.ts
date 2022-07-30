import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy/policy.service';
export interface Product {
  id: number;
  name: string;
}
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  title = 'Let';
  users: any[]=[];

  constructor(private dataservice: PolicyService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users=data;
    });
  }

  updateUser(){
    
  }
  ngOnInit(){
    this.getUsers();
  }
}
