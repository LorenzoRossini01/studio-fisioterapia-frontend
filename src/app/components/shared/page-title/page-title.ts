import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-title',
  imports: [RouterLink],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css',
})
export class PageTitle {
  title = input.required<string>();
  subtitle = input('');
}
