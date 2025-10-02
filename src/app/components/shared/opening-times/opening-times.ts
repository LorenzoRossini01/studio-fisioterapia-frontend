import { Component, signal } from '@angular/core';
import { OpeningTimeType } from '../../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opening-times',
  imports: [CommonModule],
  templateUrl: './opening-times.html',
  styleUrl: './opening-times.css',
})
export class OpeningTimes {
  currentDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  orariApertura = signal<OpeningTimeType[]>([
    {
      day: 'Lunedì',
      hours: '8:30 - 18:30',
    },
    {
      day: 'Martedì',
      hours: '8:30 - 18:30',
    },
    {
      day: 'Mercoledì',
      hours: '8:30 - 18:30',
    },
    {
      day: 'Giovedì',
      hours: '8:30 - 18:30',
    },
    {
      day: 'Venerdì',
      hours: '8:30 - 18:30',
    },
    {
      day: 'Sabato',
      hours: '8:30 - 18:30',
    },
    {
      day: 'Domenica',
      hours: '',
    },
  ]);
}
