import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/Employee.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employee-service.service';
import { WorkService } from '../services/work.service';
import { Statestic } from '../model/Statestic.model';
import { StatesticService } from '../services/statestic.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{
  employee!: EmployeeModel;
  statestic: Statestic={
    nbrEmloyees: 0,
    nbrWork: 0,
    nbrWorkToday: 0,
    nbrPendingRequest: 0
  };
  constructor(private employeeService:EmployeeService,private toastr: ToastrService,private workService:WorkService,private router: Router,private statesticServices :StatesticService ){
    this.loadEmployee()
    this.loadStetstic()
    
  }
  ngOnInit(): void {
    this.loadEmployee()
    
  }
  loadStetstic=()=>{
    return this.statesticServices.getStatesticInf().subscribe((data)=>{
      this.statestic=data
    },(error)=>{
      console.log(error)
      this.toastr.error("failed to load resources")
    })
  }


  loadEmployee():void{
    this.employeeService.getEmployeeById().subscribe((data)=>{
      
        this.employee=data
    },
    
    (error)=>{
      this.toastr.error(error)

    }
    )
  }


}
