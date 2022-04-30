export interface IEmployee {
    //declartion -> data member/properties or function/member fun/methods or events
    fname:string;
    lname:string;
    gender:string;
    salary:number;
    hra:number;
    da:number;
    hiredate:string;
    designation?:string; // optional property
}
