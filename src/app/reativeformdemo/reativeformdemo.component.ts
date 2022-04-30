import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormArray } from '@angular/forms';
import {usernamecheck,emailcheck,checkvalues} from '../shared/customvalidations'
@Component({
  selector: 'app-reativeformdemo',
  templateUrl: './reativeformdemo.component.html',
  styleUrls: ['./reativeformdemo.component.css']
})
export class ReativeformdemoComponent implements OnInit {
heading="Add Employee using Reactive Form";
employeeForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.employeeForm=new FormGroup({
    //   fullName:new FormControl('hapyy',Validators.required),
    //   Email:new FormControl(''),
    //   skills:new FormGroup({
    //     skillname:new FormControl('C#'),
    //     exp:new FormControl(),
    //     proficiency:new FormControl()
    //   })
    // });

      this.employeeForm=this.fb.group({
        fullName:['',[Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),usernamecheck]],
        Email:['',emailcheck],
        pwd:[''],
        cpwd:[''],
       skills:this.fb.array([this.addskillformgroup()])
      },{validator:checkvalues})
  }

  get getfullname(){ return this.employeeForm.get('fullName')} 
  get getEmail(){return this.employeeForm.get('Email')}
  get getcpwd(){return this.employeeForm.get('cpwd')}
  loaddata(){
    // this.employeeForm.setValue({
    //   fullName:'Harshita',
    //   // Email:'harshita@gmail.com ',
    //   skills:{
    //     skillname:'Angular',
    //     exp:10,
    //     proficiency:'Begineer'
    //   }

    // this.employeeForm.patchValue({
    //   fullName:'Harshita',
    //   Email:'harshita@gmail.com ',
    //   skills:{
    //     skillname:'Angular',
    //     exp:10,
    //     proficiency:'Beginner'
    //   }

    // })


/*    const formarray=new FormArray([
      new FormGroup({name:new FormControl('')}),
      new FormControl('happy'),
      new FormArray([])
      ])

  console.log(formarray.length)
  console.log(formarray.controls)

  formarray.push(new FormControl())

  console.log(formarray.length)
  console.log(formarray.controls)
  console.log(formarray.at(1).value) */


  // const fa=this.fb.array([])
  }

  addskillformgroup():FormGroup{
    return  this.fb.group({
      skillname:['',Validators.required],
      exp:[''],
      proficiency:['']
    })
  }
  removeformgroup(indexnum:number){
    this.getSkill.removeAt(indexnum)
  }
  get getSkill(){return this.employeeForm.get('skills') as FormArray}
  
  AddSkillBtn(){
    this.getSkill.push(this.addskillformgroup())
  }

   OnSubmit(){
    console.log(this.employeeForm.value)
    console.log(this.employeeForm.touched)
  }
}
