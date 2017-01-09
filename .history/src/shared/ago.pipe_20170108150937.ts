import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment/moment';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(moment(value).fromNow());
    return moment(value).fromNow();
  }

}
