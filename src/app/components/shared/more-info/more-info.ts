import { Component, computed, input } from '@angular/core';
import { Button, ButtonType } from '../button/button';

@Component({
  selector: 'app-more-info',
  imports: [Button],
  templateUrl: './more-info.html',
  styleUrl: './more-info.css',
})
export class MoreInfo {
  text = input.required();
  buttonType = input<ButtonType>('primary');
  buttonLabel = input.required();

  isTertiary = computed(() => {
    return this.buttonType() === 'tertiary';
  });
}
