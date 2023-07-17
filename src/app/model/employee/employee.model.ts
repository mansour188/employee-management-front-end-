import { Department } from "./department.model";
import { Project } from "./project.model";

export class EmployeeModel{
  

    constructor(
      public firstname: string,
      public lastName: string,
      public email: string,
      public birthDay: string,
      public ImageUrl: string,
      public project: Project,
      public department: Department
    ) {}
 }
