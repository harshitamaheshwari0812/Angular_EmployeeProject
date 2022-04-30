import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../shared/empservice.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  searchvalue:string=''
  Employee:any[]
  constructor(private _emp:EmpserviceService) { }

  ngOnInit(): void {
    // this.Employee=this._emp.getEmployees()
  }
  // Employee:any[]=[
  //   {fname:"Arohi",lname:"Atal",gender:"female",salary:"30000",hiredate:"12-09-2018",hra:2000,da:1000},
  //   {fname:"Arun",lname:"Verma",gender:"Male",salary:40000,hiredate:"10-10-2001",hra:3000,da:1500},
  //   {fname:"Seema",lname:"Sharma",gender:"femAle",salary:15000,hiredate:"1-08-2010",hra:4000,da:2000},
  //   {fname:"Smith",lname:"jhon",gender:"male",salary:10000,hiredate:"11-12-2008",hra:2000,da:1000},
  //   {fname:"Ivan",lname:" Bay",gender:"male",salary:20000,hiredate:"01-30-2017",hra:3500,da:2500} ]

    AddFname(uname:any){
      // console.log(uname.value)
      this.Employee.push( {
        fname:uname.value,
        lname:"Bishop",
        gender:"male",
        salary:30000,
        hiredate:"11-01-2022",
        hra:3500,
        da:2500})
    }

  

}
