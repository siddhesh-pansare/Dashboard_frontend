
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value : any, searchText1: string) {
    if(value.toString().length === 0 || searchText1 === ''){
      return value;
    }
    const names = [];
    for(const name of value){
      if(name['scode'] === searchText1){
        names.push(name);
      }
    }
    return names;
  }
}
