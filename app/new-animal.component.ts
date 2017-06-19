import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h3>New Animal</h3>
  <div class="form-group">
    <label>Enter Animal Species:</label>
    <input #newSpecies>
  </div>
  <div class="form-group">
    <label>Enter Animal Name:</label>
    <input #newName>
  </div>
  <div class="form-group">
    <label>Enter Animal Age:</label>
    <input type="number" #newAge>
  </div>
  <div class="form-group">
    <label>Animal Sex:</label>
    <select #newSex>
      <option [value]>Male</option>
      <option [value]>Female</option>
    </select>
  </div>
  <div class="form-group">
    <label>Enter Animal Diet:</label>
    <select #newDiet>
      <option [value]>Carnivore</option>
      <option [value]>Herbivore</option>
      <option [value]>Omnivore</option>
    </select>
  </div>
  <div class="form-group">
    <label>Number of caretakers:</label>
    <input type="number" #newCaretakers>
  </div>
  <div class="form-group">
    <label>Animal Location:</label>
    <select #newLocation>
      <option [value]>Zone A</option>
      <option [value]>Zone B</option>
      <option [value]>Zone C</option>
      <option [value]>Zone D</option>
      <option [value]>Zone E</option>
    </select>
  </div>
  <div class="form-group">
    <label>Name of Exhibit:</label>
    <input #newExhibit>
  </div>
  <div class="form-group">
    <label>Enter a thing the animal enjoys:</label>
    <input #newLikes>
  </div>
  <div class="form-group">
    <label>Enter a thing the animal does not enjoy:</label>
    <input #newDislikes>
  </div>
  <button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newSex.value, newDiet.value, newCaretakers.value, newLocation.value, newExhibit.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newSex.value=''; newDiet.value=''; newCaretakers.value=''; newExhibit.value=''; newLikes.value=''; newDislikes.value='';">Submit</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(Species: string, Name: string, Age: number, Sex: string, Diet: string, Caretakers: number, Location: string, Exhibit: string, Likes: string, Dislikes: string) {
    console.log(Sex);
    console.log(Location);
    var newAnimal: Animal = new Animal(Species, Name, Age, Diet, Caretakers, Location, Exhibit, Sex, Likes, Dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
