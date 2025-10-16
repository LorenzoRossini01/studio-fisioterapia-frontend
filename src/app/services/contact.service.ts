import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { environment } from '../../environments/environment.develop';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = environment.apiUrl + '/contact-messages';
  private emailUrl = environment.apiUrl + '/contact-messages/send-email'; // rotta custom

  constructor(private http: HttpClient) {}

  // 1️⃣ Invia il messaggio al backend (salva in Strapi)
  sendMessage(payload: {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    message: string;
  }) {
    return this.http.post(this.apiUrl, { data: payload });
  }

  // 2️⃣ Invia l'email (chiamando la rotta custom)
  sendEmail(payload: {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    message: string;
  }) {
    return this.http.post(this.emailUrl, payload);
  }

  // 3️⃣ Metodo helper che fa entrambe le cose
  sendMessageAndEmail(payload: {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    message: string;
  }) {
    // chiamiamo prima la POST per salvare il messaggio
    return this.sendMessage(payload).pipe(
      switchMap(() =>
        this.sendEmail({
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
          phone_number: payload.phone_number,
          message: payload.message,
        })
      )
    );
  }
}
