import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentlifecycle',
  templateUrl: './parentlifecycle.component.html',
  styleUrls: ['./parentlifecycle.component.css']
})
export class ParentlifecycleComponent implements OnInit {
value:string='Pune'
  changeValue(val:any){
    this.value=val.value
  }
  togglebtn:boolean=true
  destroy(){
    this.togglebtn=false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
