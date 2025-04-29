import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideBarComponent } from "../../../../common/side-bar/side-bar.component";
import { EmployeeService } from '../../../../service/employeeService';
import { HttpClient } from '@angular/common/http';
import Employee from '../../../../model/Employee';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/env.test';

@Component({
  selector: 'app-user-view',
  imports: [RouterLink, NgFor],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private http: HttpClient) { }

  employees: any = []

  ngOnInit(): void {
    this.http.get
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
