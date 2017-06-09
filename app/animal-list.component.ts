import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.Name}}, {{currentAnimal.Species}}, {{currentAnimal.Sex}} - Located in : {{currentAnimal.Location}} in Exhibit: {{currentAnimal.Exhibit}}  <button class="btn btn-default" (click)="editButton(currentAnimal)">Edit</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButton(animalToEdit: Animal) {
   this.clickSender.emit(animalToEdit);
}
}
