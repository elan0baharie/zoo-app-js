import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  `
})

export class AppComponent {

}

export class Task {
  constructor(public Species: string, public Name: string, public Age: number, public Diet: string, public Caretakers: number, public Location: string, public Exhibit: string, public Sex: string, public Likes: string, public Dislikes: string) { }
}
