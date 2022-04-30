import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }
  EmployeesList:any=[]
  toggleButton:boolean=true
  ngOnInit(): void {
    this.EmployeesList=this.FEmployee
  }
  myStyle={'color':'red','backgroundColor':'blue'}
  setStyle(emp:string){
    if(emp==='F'){
      this.EmployeesList=this.FEmployee
    this.myStyle={'color':'red','backgroundColor':'blue'} }
      else{  this.EmployeesList=this.PEmployee
      this.myStyle={'color':'blue','backgroundColor':'red'} }
      this.toggleButton=!this.toggleButton
  }
    FEmployee:any[]=[
    {fname:"Arohi",lname:"Atal",gender:"female",salary:30000,hiredate:"12-09-2018"},
    {fname:"Arun",lname:"Verma",gender:"male",salary:40000,hiredate:"10-10-2001"},
    {fname:"Seema",lname:"Sharma",gender:"female",salary:15000,hiredate:"1-08-2010"},
    {fname:"Smith",lname:"jhon",gender:"male",salary:10000,hiredate:"11-12-2008"},
    {fname:"Ivan",lname:" Bay",gender:"male",salary:20000,hiredate:"30-01-2017"} ]
    PEmployee:any[]=[
    {fname:"Peter",lname:"Atal",gender:"female",rate:2000},
    {fname:"Olive",lname:"Verma",gender:"male",rate:1800},
    {fname:"Walter",lname:"Sharma",gender:"female",rate:1200},
    {fname:"Jasmine",lname:"jhon",gender:"male",rate:1000}]
}
