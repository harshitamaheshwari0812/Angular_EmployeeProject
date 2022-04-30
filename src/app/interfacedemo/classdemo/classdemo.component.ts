import { Component, OnInit } from '@angular/core';
import { EmployeeClass } from '../employee-class';

@Component({
  selector: 'app-classdemo',
  templateUrl: './classdemo.component.html',
  styleUrls: ['./classdemo.component.css']
})
export class ClassdemoComponent implements OnInit {
  emp1=new EmployeeClass(1001,"Harshita","abc@gmail.com","Trainer")

  emparray:EmployeeClass[]=[
    new EmployeeClass(1001,"Harshita","abc@gmail.com","Trainer"),
    new EmployeeClass(1002,"Shreya","ashrbc@gmail.com","Trainer"),
    new EmployeeClass(1003,"meeta","meeta@gmail.com","Trainer"),
    new EmployeeClass(1004,"minal","minu@gmail.com","Trainer")
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.emp1)
  }

}
