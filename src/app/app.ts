import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { GeneralInfoService } from './services/general-info.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'studio-fisioterapia-frontend';

  private generalInfoService = inject(GeneralInfoService);

  ngOnInit(): void {
    this.generalInfoService.loadGeneralInfo();
    // console.log(this.generalInfoService.generalInfo());
  }
}
