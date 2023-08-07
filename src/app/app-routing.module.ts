import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerMangementComponent } from './employers/employer-mangement.component';
import { SginInComponent } from './sgin-in/sgin-in.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { LeaveComponent } from './leave/leave.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { TasksComponent } from './tasks/tasks.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { RoleGuard } from './services/roleGuard/role-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {path:"employees",component:EmployerMangementComponent,canActivate: [RoleGuard], data: { requiredRole: 'ADMIN' }},
  {path:"login",component:SginInComponent},
  {path:"registerEmployee",component:RegisterEmployeeComponent,canActivate: [RoleGuard], data: { requiredRole: 'ADMIN' }},
  {path:"leave",component:LeaveComponent,canActivate: [RoleGuard], data: { requiredRole: 'EMPLOYER' }},
  {path:"updateEmployee/:id",component:UpdateEmployerComponent,canActivate: [RoleGuard], data: { requiredRole: 'ADMIN' }},
  {path:"profile",component:ProfileEmployeeComponent,canActivate: [RoleGuard], data: { requiredRole: 'EMPLOYER' }},
  {path:"tasks",component:TasksComponent,canActivate: [RoleGuard], data: { requiredRole: 'EMPLOYER' }},
  {path:"leaveMangement",component:LeaveManagementComponent,canActivate: [RoleGuard], data: { requiredRole: 'ADMIN' }},
  {path:"adminProfile",component:AdminProfileComponent,canActivate: [RoleGuard], data: { requiredRole: 'ADMIN' }},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
