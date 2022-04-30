import { AbstractControl, FormGroup } from "@angular/forms";

export function usernamecheck(control:AbstractControl):{[key:string]:any} | null{
   const n= /admin/.test(control.value)
   return n?{'invalidname':{value:control.value}}:null
}


export function emailcheck(control:AbstractControl):{[key:string]:any} | null{
    const emailid=/^([a-zA-Z\#\$_\.\-0-9]+)\@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/.test(control.value)
    return emailid?null:{'invalidemail':{value:control.value}}
}

export function checkvalues(control:AbstractControl):{[key:string]:boolean} | null{
    const pwd=control.get('pwd')
    const cpwd=control.get('cpwd')
    return pwd && cpwd && 
    pwd.value !== cpwd.value?{'mismatch':true} 
    :null
}

