import { Component, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childlifecycle',
  templateUrl: './childlifecycle.component.html',
  styleUrls: ['./childlifecycle.component.css']
})
export class ChildlifecycleComponent implements OnInit,OnChanges{
  @Input()
  txtvalue:string='Pune'
  constructor() { console.log("constructor called")}
  ngOnChanges(change:SimpleChanges){
    console.log("ngOnChanges Called",change)
  }
  ngOnInit(): void {
    console.log("ngOnInit called")
  }
  ngDoCheck(){
    console.log("ngDoCheck called")
  }
  ngAfterContentInit(){
    console.log("ngOnContentInit called")
  }
  ngAfterContentChecked(){
    console.log("ngOnContentChecked called")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called")
  }
  ngOnDestroy(){
    console.log("ngDestroy called")
  }

}
