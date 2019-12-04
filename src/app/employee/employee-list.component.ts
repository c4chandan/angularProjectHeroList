import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {

public empArry:IEmployee[];

  constructor(private empService:EmployeeService) { }

  ngOnInit() {
   this.empService.getEmployeeData().subscribe(
     data=>this.empArry=data
   );
  }

   deletePerson:any='';
DeletepObj(empObj:any){
   this.empService.deletePersonDetails(empObj.personId).subscribe(data=>this.deletePerson=data)
  
   }
  }
  
 


