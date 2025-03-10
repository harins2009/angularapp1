import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeComponent, UserComponent, ProductComponent, CalculatorComponent, PipeExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp1';
}
