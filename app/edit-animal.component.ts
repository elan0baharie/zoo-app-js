import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">


        <h3>Edit {{childSelectedAnimal.Name}}'s' Info</h3>
          <div class="form-group">
            <label>Enter Animal Species:</label>
            <input type="text" [(ngModel)]="childSelectedAnimal.Species">
          </div>
          <div class="form-group">
            <label>Enter Animal Name:</label>
            <input type="text" [(ngModel)]="childSelectedAnimal.Name">
          </div>
          <div class="form-group">
            <label>Enter Animal Age:</label>
            <input type="number" [(ngModel)]="childSelectedAnimal.Age">
          </div>
          <div class="form-group">
            <label>Enter Animal Diet:</label>
            <select [(ngModel)]="childSelectedAnimal.Diet">
              <option value="Carnivore">Carnivore</option>
              <option value="Herbivore">Herbivore</option>
              <option value="Omnivore">Omnivore</option>
            </select>
          </div>
          <div class="form-group">
            <label>Enter Number of Caretakers:</label>
            <input type="number" [(ngModel)]="childSelectedAnimal.Caretakers">
          </div>
          <div class="form-group">
            <label>Enter Sex:</label>
            <select [(ngModel)]="childSelectedAnimal.Sex">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label>Choose Location:</label>
            <select [(ngModel)]="childSelectedAnimal.Location">
              <option value="Zone A">Zone A</option>
              <option value="Zone B">Zone B</option>
              <option value="Zone C">Zone C</option>
              <option value="Zone D">Zone D</option>
              <option value="Zone E">Zone E</option>
            </select>
          </div>
          <div class="form-group">
            <label>Enter Exhibit Name:</label>
            <input type="text" [(ngModel)]="childSelectedAnimal.Exhibit">
          </div>
          <div class="form-group">
            <label>Enter a thing the animal enjoys:</label>
            <input type="text" [(ngModel)]="childSelectedAnimal.Likes">
          </div>
          <div class="form-group">
            <label>Enter a thing this animal dislikes:</label>
            <input type="text" [(ngModel)]="childSelectedAnimal.Dislikes">
          </div>
          <button class="btn btn-default"(click)="finishedEditing()">Done</button>
        
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
