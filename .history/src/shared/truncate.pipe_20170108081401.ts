import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 50): string {
    console.log(value);
    return "ok";
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
