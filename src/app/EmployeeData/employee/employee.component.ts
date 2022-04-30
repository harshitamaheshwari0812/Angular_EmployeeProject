import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagePath:string="assets/images/bungee.jpg"
  imagePath1:string="bungee1.jpg"
  isDisabled:boolean=false

  EmployeeList:any[]=[
    {fname:"Arohi",lname:"Atal",gender:"female",salary:30000,hiredate:"12-09-2018"},
    {fname:"Arun",lname:"Verma",gender:"male",salary:40000,hiredate:"10-10-2001"},
    {fname:"Seema",lname:"Sharma",gender:"female",salary:15000,hiredate:"1-08-2010"},
    {fname:"Smith",lname:"jhon",gender:"male",salary:10000,hiredate:"11-12-2008"},
    {fname:"Ivan",lname:" Bay",gender:"male",salary:20000,hiredate:"30-01-2017"}
  ]

  clickfun(e:any){
    alert("button clickesd")
    console.log(e)
  }

  choose:string=''
  setName(n:any){
    console.log(n)
      this.choose=n.target.value
  }

applyredcolor:string="red"
applycolor:boolean=true
isBold:Boolean=true
myStyles={
    'color':this.applycolor?'blue':'pink',
    'fontWeight':this.isBold?'bold':'normal',
    'backgroundColor':this.generateRandonNumber()
}
generateRandonNumber(){
    let c=Math.floor(Math.random()*20000)
    let rnd='#'+c
    return rnd 
}

applycss='red size'
}
