import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-presentazione-about',
  imports: [],
  templateUrl: './presentazione-about.html',
  styleUrl: './presentazione-about.css',
})
export class PresentazioneAbout {
  curriculumCertificazioni = signal<string>(`    <p class="text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi ex
      nam architecto ipsam quis quas officia eos ea molestiae optio esse,
      officiis magni harum ab voluptatem voluptas earum! Fuga? Odit cupiditate,
      numquam expedita ipsum deserunt in possimus vero maiores maxime autem nisi
      praesentium, corporis eos cum architecto beatae tempore laborum dolores
      accusantium aliquid necessitatibus est delectus doloremque unde. Velit?
    </p>
        <p class="text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi ex
      nam architecto ipsam quis quas officia eos ea molestiae optio esse,
      officiis magni harum ab voluptatem voluptas earum! Fuga? Odit cupiditate,
      numquam expedita ipsum deserunt in possimus vero maiores maxime autem nisi
      praesentium, corporis eos cum architecto beatae tempore laborum dolores
      accusantium aliquid necessitatibus est delectus doloremque unde. Velit?
    </p>
    
    <p class="text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi ex
      nam architecto ipsam quis quas officia eos ea molestiae optio esse,
      officiis magni harum ab voluptatem voluptas earum! Fuga? Odit cupiditate,
      numquam expedita ipsum deserunt in possimus vero maiores maxime autem nisi
      praesentium, corporis eos cum architecto beatae tempore laborum dolores
      accusantium aliquid necessitatibus est delectus doloremque unde. Velit?
    </p>`);
  specializzazioni = signal<string>(`    <p class="text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi ex
      nam architecto ipsam quis quas officia eos ea molestiae optio esse,
      officiis magni harum ab voluptatem voluptas earum! Fuga? Odit cupiditate,
      numquam expedita ipsum deserunt in possimus vero maiores maxime autem nisi
      praesentium, corporis eos cum architecto beatae tempore laborum dolores
      accusantium aliquid necessitatibus est delectus doloremque unde. Velit?
    </p>
    
    <p class="text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore animi ex
      nam architecto ipsam quis quas officia eos ea molestiae optio esse,
      officiis magni harum ab voluptatem voluptas earum! Fuga? Odit cupiditate,
      numquam expedita ipsum deserunt in possimus vero maiores maxime autem nisi
      praesentium, corporis eos cum architecto beatae tempore laborum dolores
      accusantium aliquid necessitatibus est delectus doloremque unde. Velit?
    </p>`);
}
