import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(value: string): number {
    let cdate=new Date().getFullYear()
    let jdate=new Date(value).getFullYear()
    return cdate-jdate

  }

}
