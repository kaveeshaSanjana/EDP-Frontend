import { Component, NgModule } from '@angular/core';
import Employee from '../../../../model/Employee';
import { FormsModule } from '@angular/forms';
import { RouterEvent } from '@angular/router';
import { EmployeeService } from '../../../../service/employeeService';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-create',
  imports: [FormsModule ],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  constructor(private service:EmployeeService){}

  employee: Employee = {
    name: '',
    email: '',
    department: 'HR',    isActive: true
  };

  public submit():void{
    console.log('click');
    console.log(this.employee);
        
      this.service.createEmployee(this.employee).subscribe({
        next: (res) => {
          Swal.fire({
            title: "Success!",
            text: "Employee created successfully.",
            icon: "success"
          });
        },
        error: (err) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to create employee.",
            icon: "error"
          });
          console.error(err);
        }
      });
  }    

}
