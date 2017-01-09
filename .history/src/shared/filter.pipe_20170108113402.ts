import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: any, datasFilter: any = {}): any {


    if (datasFilter.hasOwnProperty('text') && datasFilter.text.length > 3) {
      let regEx = new RegExp(`${datasFilter.text}`, 'i');
      return value.filter(el => {
        return regEx.test(el.pseudo) || regEx.test(el.activite)
      })
    }

    if (datasFilter.hasOwnProperty('note') && parseInt(datasFilter.note) >= 0 && parseInt(datasFilter.note) <= 5) {
      return value.filter(el => {
        return el.note >= datasFilter.note
      })
    }

    if (datasFilter.hasOwnProperty('pays')) {
      return value.filter(el => {
        return el.nationalite.toLowerCase() == datasFilter.pays.toLowerCase()
      })
    }

    if (datasFilter.hasOwnProperty('sexe')) {
      return value.filter(el => {
        return el.sexe == datasFilter.sexe
      })
    }




    return value;

  }

}
