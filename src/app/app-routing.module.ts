import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerMangementComponent } from './employers/employer-mangement.component';
import { SginInComponent } from './sgin-in/sgin-in.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { LeaveComponent } from './leave/leave.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';


const routes: Routes = [
  {path:"employees",component:EmployerMangementComponent},
  {path:"login",component:SginInComponent},
  {path:"registerEmployee",component:RegisterEmployeeComponent},
  {path:"leave",component:LeaveComponent},
  {path:"updateEmployee/:id",component:UpdateEmployerComponent},
  {path:"test",component:ProfileEmployeeComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
