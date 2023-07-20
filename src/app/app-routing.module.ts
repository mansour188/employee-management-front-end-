import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerMangementComponent } from './employers/employer-mangement.component';
import { SginInComponent } from './sgin-in/sgin-in.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';


const routes: Routes = [
  {path:"employees",component:EmployerMangementComponent},
  {path:"login",component:SginInComponent},
  {path:"test",component:RegisterEmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
