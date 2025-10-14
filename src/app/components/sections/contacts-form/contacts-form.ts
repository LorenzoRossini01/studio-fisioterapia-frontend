import { Component, inject, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Button } from '../../shared/button/button';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contacts-form',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contacts-form.html',
  styleUrl: './contacts-form.css',
})
export class ContactsForm {
  private contactService = inject(ContactService);
  isSending = signal(false);
  success = signal(false);
  errorMessage = signal<string | null>(null);
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9+\s-]/),
    ]),
    message: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.isSending.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;
    const payload = {
      name: formValue.firstName ?? '',
      surname: formValue.lastName ?? '',
      email: formValue.email ?? '',
      phone_number: formValue.phone ?? '',
      message: formValue.message ?? '',
    };
    this.contactService.sendMessage(payload).subscribe({
      next: () => {
        this.isSending.set(false);
        this.success.set(true);
        console.log(payload);
      },
      error: (err) => {
        console.error('Errore invio:', err);
        this.errorMessage.set(
          'Si è verificato un errore durante l’invio del messaggio.'
        );
        this.isSending.set(false);
      },
    });
    this.form.reset();
  }
}
