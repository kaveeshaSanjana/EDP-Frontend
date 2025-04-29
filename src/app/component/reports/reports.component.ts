import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import Employee from '../../model/Employee';
import { EmployeeService } from '../../service/employeeService';

@Component({
  selector: 'app-reports',
  imports: [FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  constructor(private service:EmployeeService){}

  employees: Employee[] = []

  public downloadAllUserReport(){
    this.service.getAllEmployees().subscribe(
      res =>{
        this.employees = res;
        this.generateReport();
        this.employees = [];
      }
    )
  }

  public downloadUserReport(){
    this.service.getEmployeeById(Number(input)).subscribe(
      res =>{
        this.employees.push(res);
        this.generateReport();
        this.employees = [];
      }
    )
  }


  generateReport(): void {
    const header = ['ID', 'Name', 'Email', 'Department'];
    const rows = this.employees.map(emp => [emp.id, emp.name, emp.email, emp.department]);

    let csvContent = 'data:text/csv;charset=utf-8,' + header.join(',') + '\n';
    rows.forEach(row => {
      csvContent += row.join(',') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'employee_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
