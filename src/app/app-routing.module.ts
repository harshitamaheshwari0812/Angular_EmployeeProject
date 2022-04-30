import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './CRUD/emplist/emplist.component';
import { EmpcontactdetailsComponent } from './EmployeeData/empcontactdetails/empcontactdetails.component';
import { EmployeeDetailsComponent } from './EmployeeData/employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddemployeeComponent } from './CRUD/addemployee/addemployee.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'empprofile/:id',component:AddemployeeComponent},
  {path:'emplist',component:EmplistComponent},
  {
    path:'emplist/:id',
   component:EmployeeDetailsComponent,
   children:[{path:'contact',component:EmpcontactdetailsComponent}]
  },
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomp=[HomeComponent,AddemployeeComponent,PagenotfoundComponent,EmplistComponent]