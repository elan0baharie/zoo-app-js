import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <label>Age Filter:</label>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Animals under 2</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>

  <label>Diet Filter:</label>
  <select (change)="onDietChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="meatAnimals">Meat Diet</option>
    <option value="plantAnimals">Plant Diet</option>
  </select>

  <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | age:filterByAge | diet:filterByDiet">
    <div class="panel-heading">
      Name: {{currentAnimal.Name}}, Species: {{currentAnimal.Species}}
    </div>
    <div class="panel-body">
      <h5><em>Sex:</em> {{currentAnimal.Sex}}, <em>Age:</em> {{currentAnimal.Age}}</h5>
      <em>Located in:</em> {{currentAnimal.Location}} in <em>Exhibit:</em> {{currentAnimal.Exhibit}}
      <br>
      <em>Likes:</em> {{currentAnimal.Likes}}, <em>Dislikes:</em> {{currentAnimal.Dislikes}}
      <br>
      <br>
      <button class="btn btn-default" (click)="editButton(currentAnimal)">Edit</button>
    </div>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";
  filterByDiet: string = "allAnimals";

  onChange(optionFromMenu) {
    console.log(optionFromMenu);
    this.filterByAge = optionFromMenu;
  }

  onDietChange(optionFromMenu) {
    console.log(optionFromMenu);
    this.filterByDiet = optionFromMenu;
  }

  editButton(animalToEdit: Animal) {
   this.clickSender.emit(animalToEdit);
}
}
