import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from "@angular/material/select";
import { ServiceType } from '../../interfaces/serviceType';

import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatButtonModule,
    ButtonComponent
],
})
export class ModalOrderComponent {

 serviceType: ServiceType[] = [
  { code: 1, type: "Delivery"},
  { code: 2, type: "Take Away"},
 ];

 constructor() {}
  customerForm = new FormGroup({
    customer: new FormControl('',
      Validators.required,
    ),
    serviceType: new FormControl('',
      Validators.required
    )
  });
}
