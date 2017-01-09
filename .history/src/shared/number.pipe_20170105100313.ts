import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let res = "";
    for (let i = 0; i < value; i++) {
      res += '<i style="color: burlywood;font-size: 17px;" class="note material-icons">star</i>';
    }
    if (value < Math.ceil(value)) {
      res += '<i style="color: burlywood;font-size: 17px;" class="material-icons">star_half</i>';
    }

    return res;
    // return res;
  }

}
