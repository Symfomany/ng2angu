import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, text: String): any {

    let regEx = new RegExp(`${text}`, 'i');
    return value.filter(el => {
      return regEx.test(el.pseudo) || regEx.test(el.activite)
    })
    return null;
  }

}
