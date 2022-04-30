import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { EmpserviceService } from 'src/app/shared/empservice.service';
import {Createempclass}from '../createemployee/createempclass'
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private _router:Router,private _route:ActivatedRoute,
    private _emp:EmpserviceService) { }
  selectedid:any
  public Employee:any[];
  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get('id')
      this.selectedid=id;
      // this.Employee=this._emp.getEmployees();
     this._emp.getEmployees().subscribe({
       next:(res)=>
       {
         console.log(res)
         this.Employee=res
       }
      })
  }
  isSelect(id:any){
    return parseInt(id)===parseInt(this.selectedid)
}

  // Employee:any[]=[
  //   {fname:"Arohi",lname:"Atal",gender:"female",salary:30000,hiredate:"12-09-2018"},
  //   {fname:"Arun",lname:"Verma",gender:"male",salary:40000,hiredate:"10-10-2001"},
  //   {fname:"Seema",lname:"Sharma",gender:"female",salary:15000,hiredate:"1-08-2010"},
  //   {fname:"Smith",lname:"jhon",gender:"male",salary:10000,hiredate:"11-12-2008"},
  //   {fname:"Ivan",lname:" Bay",gender:"male",salary:20000,hiredate:"30-01-2017"} ]

    getTotalEmp(){
      return this.Employee.length}
    getTotalMaleEmp(){
      return this.Employee
      .filter(e=>e.gender=='male').length
    }
    getTotalFemaleEmp(){
      return this.Employee.
      filter(e=>e.gender=='female').length
    }
    radiobtnvalue:string='all'
    OnRadioButtonChanged(radiovalue:string){
        this.radiobtnvalue=radiovalue
    }

    OnSelect(id:number){
      // this._router.navigate(['/emplist',id])
        this._router.navigate([id],{relativeTo:this._route})
    }

   





}

