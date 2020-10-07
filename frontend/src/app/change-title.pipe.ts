import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTitle'
})
export class ChangeTitlePipe implements PipeTransform {

  transform(value: string) {
    return null;
  }

}
