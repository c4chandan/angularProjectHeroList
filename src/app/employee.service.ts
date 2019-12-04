import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  private serviceUrl:string="http://localhost:1234/angularProjectFrontend/ListOfperson";
  constructor(private http:HttpClient) { }

 getEmployeeData():Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this.serviceUrl);
 }
deletePersonDetails(personId:number):Observable<boolean>{
  return this.http.get<boolean>("http://localhost:1234/angularProjectFrontend/deletePerson/"+personId);
}
}
