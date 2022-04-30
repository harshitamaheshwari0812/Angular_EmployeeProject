import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  empid:any;
  selectedid:any;
  constructor(private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
      // let id=this._route.snapshot.paramMap.get('id')
      // console.log(id)
      // this.empid=id;
    this._route.paramMap.subscribe((params:ParamMap)=>{let id=params.get('id')
      this.empid=id;
  })

  }
  goToEmpList(){
  this.selectedid=this.empid?this.empid:null
    // this._router.navigate(['/emplist',{id:this.selectedid}])
      this._router.navigate(['../',{id:this.selectedid}],{relativeTo:this._route})
  }
  contactdetails(){
    this._router.navigate(['contact'],{relativeTo:this._route})
  }
  goPrevious(){
    let previd=parseInt(this.empid)-1
    console.log(previd)
    this._router.navigate(['/emplist',previd])
  }
  goNext(){
    let nextid=parseInt(this.empid)+1
    console.log(nextid)
    this._router.navigate(['/emplist',nextid])
  }

}
