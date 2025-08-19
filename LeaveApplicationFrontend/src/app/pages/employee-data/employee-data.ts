import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-data.html',
  styleUrls: ['./employee-data.scss'] // ✅ fixed typo
})
export class EmployeeData {
  employees = [
    { id: 4, name: 'wASEE ASHAN', phone: 4654646, email: 'wasee@example.com' } // ✅ phone is number
  ];

  employee = { id: 0, name: '', phone: 0, email: '' }; // ✅ phone initialized as number

  saveEmployee() {
    if (this.employee.id) {
      // Update
      const index = this.employees.findIndex(e => e.id === this.employee.id);
      if (index > -1) this.employees[index] = { ...this.employee };
    } else {
      // Add
      const newId = Math.max(...this.employees.map(e => e.id), 0) + 1;
      this.employees.push({ ...this.employee, id: newId });
    }
    this.resetForm();
  }

  editEmployee(emp: any) {
    this.employee = { ...emp };
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
    this.resetForm();
  }

  resetForm() {
    this.employee = { id: 0, name: '', phone: 0, email: '' }; // ✅ reset phone to number
  }
}
