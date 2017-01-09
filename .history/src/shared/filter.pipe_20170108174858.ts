import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: any, datasFilter: any = {}): any {

    if (!datasFilter || Object.keys(datasFilter).length === 0) {
      return value;
    }

    if (datasFilter.hasOwnProperty('name') && datasFilter.name.length >= 3) {
      let regEx = new RegExp(`${datasFilter.name}`, 'i');
      value = value.filter(el => {
        return regEx.test(el.pseudo) || regEx.test(el.activite);
      });
    }
    console.log(datasFilter);
    if (datasFilter.hasOwnProperty('note')) {
      value = value.filter(el => {
        return el.note >= parseInt(datasFilter.note);
      })
    }
    // if (datasFilter.hasOwnProperty('pays') && datasFilter.pays != "") {
    //   value = value.filter(el => {
    //     return el.pays.toLowerCase() == datasFilter.pays.toLowerCase()
    //   })
    // }

    // if (datasFilter.hasOwnProperty('sexe') && datasFilter.pays != "indifferent") {
    //   value = value.filter(el => {
    //     return el.sexe == datasFilter.sexe;
    //   })
    // }

    return value;

  }

}
