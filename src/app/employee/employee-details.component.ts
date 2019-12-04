import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public empArry:IEmployee[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
this.empService.getEmployeeData().subscribe(
  data=>this.empArry=data
)
}
  }
