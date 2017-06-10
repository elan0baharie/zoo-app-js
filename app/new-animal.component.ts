import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h3>New Animal</h3>
  <div>
    <label>Enter Animal Species:</label>
    <input #newSpecies>
  </div>
  <div>
    <label>Enter Animal Name:</label>
    <input #newName>
  </div>
  <div>
    <label>Enter Animal Age:</label>
    <input #newAge>
  </div>
  <div>
    <label>Animal Sex:</label>
    <select #newSex>
      <option [value]="Male"> Male </option>
      <option [value]="Female"> Female </option>
    </select>
  </div>
  <div>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
  </div>
  <div>
    <label>Number of caretakers:</label>
    <input #newCaretakers>
  </div>
  <div>
    <label>Animal Location:</label>
    <select #newLocation>
      <option [value]="Zone A"> Zone A </option>
      <option [value]="Zone B"> Zone B </option>
      <option [value]="Zone C"> Zone C </option>
      <option [value]="Zone D"> Zone D </option>
      <option [value]="Zone E"> Zone E </option>
    </select>
  </div>
  <div>
    <label>Name of Exhibit:</label>
    <input #newExhibit>
  </div>
  <div>
    <label>Enter a thing the animal enjoys:</label>
    <input #newLikes>
  </div>
  <div>
    <label>Enter a thing the animal does not enjoy:</label>
    <input #newDislikes>
  </div>
  <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newSex.value, newDiet.value, newCaretakers.value, newLocation.value, newExhibit.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newSex.value=''; newDiet.value=''; newCaretakers.value=''; newLocation.value=''; newExhibit.value=''; newLikes.value=''; newDislikes.value='';">Submit</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(Species: string, Name: string, Age: number, Sex: string, Diet: string, Caretakers: number, Location: string, Exhibit: string, Likes: string, Dislikes: string) {
    var newAnimal: Animal = new Animal(Species, Name, Age, Sex, Diet, Caretakers, Location, Exhibit, Likes, Dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
