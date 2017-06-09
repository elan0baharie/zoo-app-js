import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <zoo-header></zoo-header>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal ('Elephant', 'Zob', 4, 'plants', 3, 'Zone A', "Elephant's Kingdom", 'Male', 'People', 'Loneliness')

    ];

  selectedAnimal = null;

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
    console.log(this.selectedAnimal);
  }

  finishedEditing() {
  this.selectedAnimal = null;

}
