import { Component } from '@angular/core';
import { Address } from './address';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  id:number=100
  name:string="hari"
  salary:number=4000
  address:Address=new Address();

}
