import { Component, computed, input, output } from '@angular/core';

export type ButtonType = 'primary' | 'danger' | 'tertiary';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input.required();

  type = input<ButtonType>('primary');

  onClick = output();

  classList = computed<string>(() => {
    let classes = ' px-8 py-4 rounded-full  font-bold';
    switch (this.type()) {
      case 'primary':
        return 'bg-[#64A69D] hover:bg-[#5EBA7E] text-white' + classes;
      case 'danger':
        return (
          'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white' +
          classes
        );

      case 'tertiary':
        return (
          'border-2 border-white text-white  bg-transparent hover:bg-white hover:text-[#64A69D] hover:border-white' +
          classes
        );
    }
  });

  handleClick() {
    this.onClick.emit();
  }
}
