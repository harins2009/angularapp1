import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Consumer } from './model/consumer';
import { TmplAstForLoopBlockEmpty } from '@angular/compiler';

@Component({
  selector: 'app-consumer',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.css'
})
export class ConsumerComponent {
  consumer:Consumer=new Consumer();
  formgroup:FormGroup;
  id:FormControl;
  name:FormControl;
  location:FormControl;
  salary:FormControl;

  constructor( private formbuilder:FormBuilder){
    this.id=new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)])
    this.name=new FormControl('',[Validators.required, Validators.maxLength(20), Validators.minLength(5)])
    this.location=new FormControl('',[Validators.required, Validators.maxLength(30), Validators.minLength(5)])
    this.salary=new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(5)])
    this.formgroup=this.formbuilder.group({
      id:this.id,
      name:this.name,
      salary:this.salary,
      location:this.location
    })
  }


}
