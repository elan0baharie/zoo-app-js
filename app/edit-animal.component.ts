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
