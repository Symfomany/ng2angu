import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: any, text: String): any {

    if (text.length < 3) {
      return value;
    }

    let regEx = new RegExp(`${text}`, 'i');
    return value.filter(el => {
      return regEx.test(el.pseudo) || regEx.test(el.activite)
    })
  }

}
