import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  <animal-list></animal-list>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    ];
}
