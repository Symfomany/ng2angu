import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 50): string {
    let trail = value.length > 1 ? value : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
