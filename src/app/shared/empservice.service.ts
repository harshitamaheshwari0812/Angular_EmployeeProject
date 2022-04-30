import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Empclass } from '../CRUD/empclass';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
_url="http://localhost:3000/Employees/"
  constructor(private _http:HttpClient) { }
    
    getEmployees(){
      return this._http.get(this._url).pipe(catchError(this.errorHandler))
    }
    errorHandler(error:HttpErrorResponse){
      return throwError(()=>error.message || 'server error')
    }
    getEmployeeById(id:any){
      return this._http.get(this._url+id)
    }
    submitData(emp:Empclass){
     return this._http.post(this._url,emp);
    }

    deleteemployee(id:any){
      return this._http.delete(this._url+id)
    }

    updateemployee(emp:Empclass){
      return this._http.put(this._url+emp.id,emp)
    }
}

