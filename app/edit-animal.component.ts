import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <hr>
          <h3>Edit {{childSelectedAnimal.Name}}'s' Info</h3>
          <label>Enter Animal Species:</label>
          <input type="text" [(ngModel)]="childSelectedAnimal.Species">
          <label>Enter Animal Name:</label>
          <input type="text" [(ngModel)]="childSelectedAnimal.Name">
          <label>Enter Animal Age:</label>
          <input type="number" [(ngModel)]="childSelectedAnimal.Age">
          <label>Enter Animal Diet:</label>
          <input type="text" [(ngModel)]="childSelectedAnimal.Diet">
          <label>Enter Number of Caretakers:</label>
          <input type="number" [(ngModel)]="childSelectedAnimal.Caretakers">
          <label>Enter Sex:</label>
          <select [(ngModel)]="childSelectedAnimal.Sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Choose Location:</label>
          <select [(ngModel)]="childSelectedAnimal.Location">
            <option value="Zone A">Zone A</option>
            <option value="Zone B">Zone B</option>
            <option value="Zone C">Zone C</option>
            <option value="Zone D">Zone D</option>
            <option value="Zone E">Zone E</option>
          </select>
          <label>Enter Exhibit Name:</label>
          <input type="text" [(ngModel)]="childSelectedAnimal.Exhibit">
          <label>Enter a thing the animal enjoys:</label>
          <input type="text" [(ngModel)]="childSelectedAnimal.Likes">
          <label>Enter a thing this animal dislikes:</label>
          <input type="text" [(ngModel)]="childSelectedAnimal.Dislikes">
          <button (click)="finishedEditing()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing() {
    this.finishedEditingSender.emit();
  }
}
