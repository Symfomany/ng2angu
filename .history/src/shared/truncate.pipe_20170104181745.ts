import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let trail = value.length > 1 ? value : '...';
    console.log(limit, limit, trail, value);
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
