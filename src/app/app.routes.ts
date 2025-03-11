import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustomerComponent } from './customer/customer.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    // {path:'', component:CalculatorComponent},
    {path:'Calculator', component:CalculatorComponent},
    {path:'Consumer', component:ConsumerComponent},
    {path:'Customer', component:CustomerComponent},
    {path:'Employee', component:EmployeeComponent},
    {path:'Pipe', component:PipeExampleComponent},
    {path:'Product', component:ProductComponent},
    {path:'User', component:UserComponent},

];
