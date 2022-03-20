import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/departmenLlist',
    pathMatch:"full"
  },
  {
    path:"departmenLlist",
    component:DepartmentListComponent
  },
  {
    path:"employee",
    component:EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
