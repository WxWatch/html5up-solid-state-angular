import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  padTime(t: Number) {
    return t < 10 ? `0${t}` : t;
  }

  transform(value: number, args?: any): any {
    if (value < 0) {
      return '00:00:00';
    }

    const hours = Math.floor(value / 3600),
      minutes = Math.floor((value % 3600) / 60),
      seconds = Math.floor(value % 60);

    if (hours === 0) {
      return `${this.padTime(minutes)}:${this.padTime(seconds)}`;
    }
    return `${this.padTime(hours)}:${this.padTime(minutes)}:${this.padTime(seconds)}`;
  }

}
