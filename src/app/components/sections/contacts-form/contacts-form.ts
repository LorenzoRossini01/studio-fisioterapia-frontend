import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-contacts-form',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contacts-form.html',
  styleUrl: './contacts-form.css',
})
export class ContactsForm {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.pattern(/^[0-9+\s-]/)),
    message: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('📨 Form inviato:', this.form.value);
  }
}
