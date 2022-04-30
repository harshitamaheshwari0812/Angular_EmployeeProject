import { Component, OnInit } from '@angular/core';
import { Empclass } from '../empclass'
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../../shared/empservice.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  // title:string="Add Employee"
  designation:any[]=[{id:1,name:"Developer"},{id:2,name:"Manager"},
  {id:3,name:"Tester"},{id:4,name:"Admin"},{id:5,name:"SalseExecutive"}]
  empdata=new Empclass('','','',0,0,0,'',null);
    constructor(private _route:ActivatedRoute,private _emp:EmpserviceService,private _router:Router) { }
editdata:boolean=false
  ngOnInit(): void {
        let id=this._route.snapshot.paramMap.get('id')
        if(id){
          this.editdata=true
        this._emp.getEmployeeById(id).subscribe({
          next:(data:any)=>{
            console.log(data)
           this.empdata=data 
          },
          error:()=>console.log('not fetched')
        })
      }
  }

AddEmp(){
  console.log(this.empdata)
  if(!this.editdata){
  this._emp.submitData(this.empdata).subscribe({
    next:()=>{
      console.log('Record added successfully')
     this._router.navigate(['emplist'])
    },
    error:()=>console.log('error')
  })
}
else
{
    this._emp.updateemployee(this.empdata).subscribe({
      next:()=>{
        console.log('Record updated successfully')
       this._router.navigate(['emplist'])
      },
      error:()=>console.log('error')
    })
}
}
haserr=false
checkDesg(d:string){
  if(d==null)
    this.haserr=true
  else
  this.haserr=false
}


}
