import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';
import { EmployeeModel } from '../model/employee/employee.model';

@Component({
  selector: 'app-employer-mangement',
  templateUrl: './employer-mangement.component.html',
  styleUrls: ['./employer-mangement.component.css']
})
export class EmployerMangementComponent implements OnInit{
  public employees!: EmployeeModel[];
  constructor(private employeeService:EmployeeService  ){}
  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((data)=>{
      this.employees=data;
    },
    (error)=>{
      console.log(error)
    });
    
  }
  



}
