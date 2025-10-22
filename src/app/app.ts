import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer, OpeningTimeType } from './components/footer/footer';
import { GeneralInfoService } from './services/general-info.service';
import { Loader } from './components/shared/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'studio-fisioterapia-frontend';

  private generalInfo = inject(GeneralInfoService);

  ngOnInit(): void {
    this.generalInfo.loadGeneralInfo();
  }
}
