import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumer',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.css'
})
export class ConsumerComponent {

}
