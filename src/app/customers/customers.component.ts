import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  
  todaydate=new Date();
  months =["jan","feb","march"];
  customersOrderTotal: number;
  constructor() { }
  cust: any[];
  orderTotal:number;
  
  ngOnInit() {
    this.cust = [
      { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
  ];
  }

  
  calculateOrders() {
    this.customersOrderTotal = 0;

        this.customersOrderTotal += this.orderTotal;
}
}
