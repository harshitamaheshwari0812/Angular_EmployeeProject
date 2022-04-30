import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute ,ParamMap} from '@angular/router';
import { Empclass } from '../empclass'
import { EmpserviceService } from '../../shared/empservice.service';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor(private _router:Router,private _route:ActivatedRoute,
    private _emp:EmpserviceService) { }
    selectedid:any
    errorMsg=''
    public Employee:Empclass[]
    ngOnInit(): void {
    this._emp.getEmployees().subscribe({
      next:(data:any)=>this.Employee=data,
      error:(error)=>{
        console.log(error)
      this.errorMsg=error
      }
    })
       this._route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id')
       this.selectedid =id
      })
      
  }
  DeleteEmp(id:any){
    this._emp.deleteemployee(id).subscribe({
      error:()=>console.log('error'),
      complete:()=>{
        this._router.navigate(['emplist'])
      }
    })
  }
  EditEmp(id:any){
    this._router.navigate(['empprofile',id])
  }
  isSelected(i:any){
    return parseInt(i) === parseInt(this.selectedid)
  }
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

    onSelect(id:number){
      // console.log(id)
      // this._router.navigate(['/emplist',id])
      this._router.navigate([id],{relativeTo:this._route})
    }


}
