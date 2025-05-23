import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../../service/employeeService';
import Swal from 'sweetalert2';
import Employee from '../../../../model/Employee';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  searchText: string = '';

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  public delete(id: any): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        Swal.fire({
          title: "Success!",
          text: "Employee deleted successfully.",
          icon: "success"
        });
        this.loadData();
      },
      error: (err) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete employee.",
          icon: "error"
        });
        console.error(err);
      }
    });
  }

  filteredEmployees(): Employee[] {
    const text = this.searchText.trim().toLowerCase();
    if (!text) return this.employees;
    return this.employees.filter(e =>
      e.name.toLowerCase().includes(text) ||
      e.email.toLowerCase().includes(text)
    );
  }
}

