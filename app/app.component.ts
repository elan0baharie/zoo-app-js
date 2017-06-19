import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
    <zoo-header></zoo-header>
    <div class="well col-md-6">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <div class="well col-md-6">
      <edit-animal [childSelectedAnimal]="selectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>

  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal ('Elephant', 'Zob', 4, 'Herbivore', 3, 'Zone A', "Elephant's Kingdom", 'Male', 'People', 'Loneliness'),
    new Animal ('Lion', 'Simbah', 1, 'Carnivore', 2, 'Zone D', "Lion's Den", 'Male', 'Yogurt', 'Being sick'),
    new Animal ('Gorilla', 'Steve', 1, 'Omnivore', 3, 'Zone E', "Steve's Pad", 'Male', 'Bananas', 'People'),
    new Animal ('Giraffe', 'Laura', 1, 'Herbivore', 4, 'Zone A', "The Savanna", 'Female', 'Bamboo shoots', 'Too much sun'),
    new Animal ('Wolf', 'Shianne', 3, 'Carnivore', 2, 'Zone D', "The Packhouse", 'Female', 'Fresh water', 'Food thats been left out'),
    new Animal ('Meercat', 'Timon', 3, 'Herbivore', 1, 'Zone A', "The Savanna", 'Male', 'Cat toys', 'Birds')
    ];
    addAnimal(newAnimalFromComponent: Animal) {
      this.masterAnimalList.push(newAnimalFromComponent);
    }

  selectedAnimal = null;

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
    console.log(this.selectedAnimal);
  }

  finishedEditing() {
  this.selectedAnimal = null;

  }

}
