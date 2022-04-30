import { Component, OnInit } from '@angular/core';
import { Createempclass } from './createempclass';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  title:string="Create Employee"
  empdata=new Createempclass('','','',0,0,0,'',null);
  designation:any[]=[{id:101,name:'Developer'},
  {id:102,name:'Tester'},
  {id:103,name:'Manager'},
  {id:104,name:'Admin'},
  {id:105,name:'SalesExecutive'}]
  dhaserr=false
    checkselect(d:any){
      // console.log(d)
      if(d==null)
        this.dhaserr=true
      else
      this.dhaserr=false
    }
  // fname1:string='happy'
  constructor() { }

  ngOnInit(): void {
  }

  creatForm(emp:NgForm){
    console.log(emp.value)
  }
}
