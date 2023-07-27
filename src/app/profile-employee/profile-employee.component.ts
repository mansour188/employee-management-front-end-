import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';
import { EmployeeModel } from '../model/Employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-employee',
  templateUrl: './profile-employee.component.html',
  styleUrls: ['./profile-employee.component.css']
})
export class ProfileEmployeeComponent implements OnInit {
   employee!:EmployeeModel
  
  constructor(private employeeService:EmployeeService,private toastr: ToastrService){
    
  }
  ngOnInit(): void {
    this.loadEmployee()
    
  }


  loadEmployee():void{
    this.employeeService.getEmployeeById().subscribe((data)=>{
      console.log(data)
        const imageDataUrl = 'data:image/jpeg;base64,' + data.imageData;
        data.imageData = imageDataUrl;
        this.employee=data
    },
    
    (error)=>{
      this.toastr.error(error)

    }
    )
  }


}
