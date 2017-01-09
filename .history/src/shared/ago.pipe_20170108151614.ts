import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment/moment-with-locales';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    moment.locale('fr');
    return moment(value).fromNow();
  }

}
