import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})


export class DietPipe implements PipeTransform {
  transform(input: Animal[], diet) {
    var output: Animal[] = [];
    if(diet === "plantAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].Diet === "Herbivore" || input[i].Diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "meatAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].Diet === "Carnivore" || input[i].Diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
 }
}
