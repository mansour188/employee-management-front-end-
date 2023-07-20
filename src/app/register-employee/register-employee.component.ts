import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { EmployeeService } from "../services/employee-service.service";
import { trigger } from "@angular/animations";


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css'],
  animations: [
    trigger('flyInOut', [
      // Animation definition goes here
    ])
  ]
  
})
export class RegisterEmployeeComponent {
  employee: any = {}; //  instance of the employeeRegister model
  @ViewChild('fileInput', { static: false }) fileInput!: any;

  constructor(private registerService:EmployeeService){}

  register(form: NgForm) {
    
    const file: File = this.fileInput.nativeElement.files[0];
    
    const employee = {
      firstname: form.value.firstname,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
      birthDay: form.value.birthDay,
      role: form.value.role
    };
    
    
  
    
    
  this.registerService.registerEmpngloyee(file,this.employee)
  
  }
  
}
