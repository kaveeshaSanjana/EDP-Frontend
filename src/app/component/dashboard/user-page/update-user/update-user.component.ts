import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../service/employeeService';
import Employee from '../../../../model/Employee';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  imports: [FormsModule , RouterLink],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  
  constructor(private service:EmployeeService , protected route: ActivatedRoute){}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam !== null ? Number(idParam) : null;
    this.setId(Number(id));
    this.loadEmployee(id);
    
  }
  employee: Employee = {
      id:0,
      name: '',
      email: '',
      department: 'HR'
    };

  public setId(id:number):void{
    this.employee.id = id;
  }
  
    
  public update():void{
    this.service.updateEmployee(Number(this.employee.id),this.employee).subscribe({
            next: (res) => {
              Swal.fire({
                title: "Success!",
                text: "Employee Updated successfully.",
                icon: "success"
              });
            },
            error: (err) => {
              Swal.fire({
                title: "Error!",
                text: "Failed to Updated employee.",
                icon: "error"
              });
              console.error(err);
            }
          });
  }
  
  loadEmployee(id:number|null){
    if(id == null){
      
    }
    this.service.getEmployeeById(Number(id)).subscribe(
      {
            next: (res) => {
              this.employee.name = res.name;
              this.employee.email = res.email;
              this.employee.department = res.department;
            },
            error: (err) => {
              console.error(err);
            }
          });
  }


}
