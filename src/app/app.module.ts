import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule,routingcomp } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './EmployeeData/employee/employee.component';
import { AddEmployeeComponent } from './EmployeeData/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomdirectiveDirective } from './shared/customdirective.directive';
import { AssignmentComponent } from './assignment/assignment.component';
// import { EmpListComponent } from './EmployeeData/emp-list/emp-list.component';
import { EmpCountComponent } from './EmployeeData/emp-count/emp-count.component';
import { TrvdemoComponent } from './trvdemo/trvdemo.component';
import { ParentlifecycleComponent } from './parentlifecycle/parentlifecycle.component';
import { ChildlifecycleComponent } from './childlifecycle/childlifecycle.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { TitlePipe } from './shared/title.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { ExpPipe } from './shared/exp.pipe';
import { TotalsalPipe } from './pipedemp/totalsal.pipe';
import { InterfacedemoComponent } from './interfacedemo/interfacedemo.component';
import { ClassdemoComponent } from './interfacedemo/classdemo/classdemo.component';
// import { CreateemployeeComponent } from './EmployeeData/createemployee/createemployee.component';
import { ReativeformdemoComponent } from './reativeformdemo/reativeformdemo.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeDetailsComponent } from './EmployeeData/employee-details/employee-details.component';
import { EmpcontactdetailsComponent } from './EmployeeData/empcontactdetails/empcontactdetails.component';
// import { HomeComponent } from './home/home.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpserviceService } from './shared/empservice.service';
import { EmplistComponent } from './CRUD/emplist/emplist.component';
import { AddemployeeComponent } from './CRUD/addemployee/addemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxdemoComponent } from './ngxdemo/ngxdemo.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    CustomdirectiveDirective,
    AssignmentComponent,
    // EmpListComponent,
    EmpCountComponent,
    TrvdemoComponent,
    ParentlifecycleComponent,
    ChildlifecycleComponent,
    PipedemoComponent,
    TitlePipe,
    FilterPipe,
    ExpPipe,
    TotalsalPipe,
    InterfacedemoComponent,
    ClassdemoComponent,
    // CreateemployeeComponent,
    ReativeformdemoComponent,
    HeaderComponent,
    // HomeComponent,
    // PagenotfoundComponent
    routingcomp,
    EmployeeDetailsComponent,
    EmpcontactdetailsComponent,
    EmplistComponent,
    AddemployeeComponent,
    NgxdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,
    CarouselModule.forRoot(),AlertModule.forRoot(),TimepickerModule.forRoot(),
    MaterialModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
