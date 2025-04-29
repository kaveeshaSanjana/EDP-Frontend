import { Component } from '@angular/core';
import Employee from '../../../../model/Employee';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-user-create',
  imports: [],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    department: 'HR',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true
  };


}
