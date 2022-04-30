import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxdemo',
  templateUrl: './ngxdemo.component.html',
  styleUrls: ['./ngxdemo.component.css']
})
export class NgxdemoComponent implements OnInit {
  dismiss=true
  alerts = {
    type: 'danger',
    dismissalert:true,
    msg: `Well done! You successfully read this important alert message.
   `,
    timeout: 5000
  };
  mytime: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
