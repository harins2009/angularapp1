import { Component } from '@angular/core';
import { Insurance } from './model/insurance';
import { insurancedata } from './Data/insurance_data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe-example',
  imports: [CommonModule],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  insurance:Insurance[];



  constructor (){
    this.insurance=insurancedata
  }

  user={"userId":1,
    "userName":"parshant kumar",
    "dob":"1998-12-25",
    "address":{
      "city":"kochi",
      "location":"kakkanad",
      "state":"kerala"
    }
    
}

}
