import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: any, datasFilter: any = {}): any {

    if (!datasFilter || Object.keys(datasFilter).length === 0) {
      return value;
    }

    let tab = value.filter(el => {
      return el.note >= parseInt(datasFilter.note)
    });

    console.log(tab);

    return value;

    // if (datasFilter.hasOwnProperty('text') && datasFilter.text.length > 3) {
    //   let regEx = new RegExp(`${datasFilter.text}`, 'i');
    //   value = value.filter(el => {
    //     return regEx.test(el.pseudo) || regEx.test(el.activite)
    //   })
    // }

    // if (datasFilter.hasOwnProperty('note')) {
    //   return value.filter(el => {
    //     return el.note >= parseInt(datasFilter.note)
    //   })
    // }

    // if (datasFilter.hasOwnProperty('pays')) {
    //   value = value.filter(el => {
    //     return el.pays.toLowerCase() == datasFilter.pays.toLowerCase()
    //   })
    // }

    // if (datasFilter.hasOwnProperty('sexe')) {
    //   value = value.filter(el => {
    //     return el.sexe == datasFilter.sexe
    //   })
    // }

    // return value;

  }

}
