import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerMangementComponent } from './employer-mangement/employer-mangement.component';
import { SginInComponent } from './sgin-in/sgin-in.component';

const routes: Routes = [
  {path:"test",component:EmployerMangementComponent},
  {path:"login",component:SginInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
