import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }

    return '<i style="color: burlywood;font-size: 17px;"class="note material-icons dp48">grade</i>'
    // return res;
  }

}
