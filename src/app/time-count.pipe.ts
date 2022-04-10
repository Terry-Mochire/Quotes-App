import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {



  transform(value: any,): number{
    let timeNow: number = new Date().getTime();
    var timeDifference = Math.abs(value - timeNow);
    const millisecondsInMinute = 60 * 1000;
    var timeDifferenceMinutes = Math.round(timeDifference/millisecondsInMinute);
    
    
      return timeDifferenceMinutes;
    
  }
 

}
