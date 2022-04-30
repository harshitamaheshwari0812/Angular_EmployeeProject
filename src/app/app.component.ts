import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  templateUrl: './app.component.html',
  // template:`<h2>Hello from Template</h2>
  //           dghfjgh
  //           fghfghkjfh
  //           fgnkjfhgjkfhgk<br>
  //           <h1>
  //           {{title}}`,
  styleUrls: ['./app.component.css']
    // styles:['h1{color:red}']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;





  title:string = 'Employee Details';
  fname:string="Ram";
  lname:string="Sharma";
  gender:string="male";
  salary:number=200000;
  cols:number=2;
  displaydiv:boolean=true;
  colors:string[]=["red","green","blue","yellow"]


  









}
