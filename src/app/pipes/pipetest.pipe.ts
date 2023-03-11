import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetest'
})
export class PipetestPipe implements PipeTransform {

  transform(value: string): any {
    if(value.length==14){
      return "it is national id"
    }
    else{
      return "it is not national id"
    }
  }

}
