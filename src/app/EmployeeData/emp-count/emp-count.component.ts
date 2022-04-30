import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent implements OnInit {
  @Input() all:number=0
  @Input() male:number=0
  @Input() female:number=0
  selectRadioBtnValue:string='all'
  @Output()
  OnRadioBtnSelectionChange:EventEmitter<string>
  =new EventEmitter<string>()
//raise custom event
  onRadioBtnChange(){
    this.OnRadioBtnSelectionChange.emit(this.selectRadioBtnValue)
    // console.log(this.selectRadioBtnValue)
  }










  constructor() { }

  ngOnInit(): void {
  }

}
