import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  title:string="Add Employee"
  txtvalue=""

  constructor() { }

  ngOnInit(): void {
  }

}
