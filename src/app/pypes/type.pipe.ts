import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese = {
    Grass: '草',
    Poison: '毒',
    Water: '水',
    Fire:'火',
    Bug: '虫',
    Normal: 'ノーマル',
    Flying: '飛行'
  }

  transform(types: string[], ...args: unknown[]): unknown {
    console.log("★1",types)
    console.log("★2",args)
    return types.map(type => this.japanese[type] || type);
  }

}
