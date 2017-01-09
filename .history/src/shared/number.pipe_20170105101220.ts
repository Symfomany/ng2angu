import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let res = "";
    for (let i = 0; i < Math.floor(value); i++) {
      res += '<i class="note material-icons">star</i>';
    }


    if (value < Math.ceil(value)) {
      res += '<i class="material-icons note">star_half</i>';
    }

    for (let i = 0; i < 5 - Math.ceil(value); i++) {
      res += '<i class="note material-icons">star_border</i>';
    }


    return res;
  }

}
