import { Component, inject, OnInit, signal } from '@angular/core';
import { OpeningTimeType } from '../../footer/footer';
import { CommonModule } from '@angular/common';
import { GeneralInfoService } from '../../../services/general-info.service';

@Component({
  selector: 'app-opening-times',
  imports: [CommonModule],
  templateUrl: './opening-times.html',
  styleUrl: './opening-times.css',
})
export class OpeningTimes implements OnInit {
  private generalSiteInfo = inject(GeneralInfoService);
  currentDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  orariApertura = signal<OpeningTimeType[]>([]);

  ngOnInit(): void {
    const openingTimesFromService =
      this.generalSiteInfo.generalInfo()?.opening_times?.days;
    if (openingTimesFromService) {
      const formattedOpeningTimes: OpeningTimeType[] =
        openingTimesFromService.map((day) => ({
          day: day.day_name,
          hours: day.is_closed ? '' : day.hours_contracted,
        }));
      this.orariApertura.set(formattedOpeningTimes);
    }
  }
}
