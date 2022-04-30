export class EmployeeClass {
    // empid:number;
    // username:string;
    // email:string;
    // designation:string;
    // constructor(id:number,uname:string,email:string,desg:string){
    //     this.empid=id;
    //     this.username=uname;
    //     this.email=email;
    //     this.designation=desg;
    // }

    constructor(public empid:number,public username:string,public email:string,public designation:string){}

    getUsername(){return `Name=${this.username}`}

    // "Name="+this.username




}
