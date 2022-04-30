import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trvdemo',
  templateUrl: './trvdemo.component.html',
  styleUrls: ['./trvdemo.component.css']
})
export class TrvdemoComponent implements OnInit {
  username:string="Harshita"
  fetchValue(uname:any){
    console.log(uname.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
