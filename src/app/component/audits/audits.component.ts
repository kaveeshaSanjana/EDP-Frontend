import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../service/employeeService';
import Employee from '../../model/Employee';

@Component({
  selector: 'app-audits',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.css']
})
export class AuditsComponent implements OnInit {

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

  public delete(id: number): void {
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
