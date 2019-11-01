import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateService {
  createDate(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, timezone?: string) {
    let dateStr = '';
    dateStr += year ? `${year}` : moment(null).format('YYYY');
    dateStr += month ? `${month}` : '00';
    dateStr += day ? `${day}` : '00';
    dateStr += ':';
    dateStr += hour ? `${hour}` : '00';
    dateStr += minute ? `${minute}` : '00';
    dateStr += second ? `${second}` : '00';
    dateStr += timezone ? ` ${timezone}` : ` ${moment().format('zz')}`;
    return moment(dateStr, 'YYYYMMDD:HHmmss zz').toDate();
  }

  today(): Date {
    return moment().startOf('day').toDate();
  }
  isBefore(d1: Date, d2: Date): boolean {
    let outcome = false;
    if (d1 && d2) {
      outcome = moment(d1).isBefore(moment(d2));
    }
    return outcome;
  }
  isAfter(d1: Date, d2: Date): boolean {
    let outcome = false;
    if (d1 && d2) {
      outcome = moment(d1).isAfter(moment(d2));
    }
    return outcome;
  }
  isSameDay(d1: Date, d2: Date): boolean {
    let outcome = false;
    if (d1 && d2) {
      outcome = moment(d1).startOf('day').isSame(moment(d2).startOf('day'));
    }
    return outcome;
  }
  isSameMonth(d1: Date, d2: Date): boolean {
    let outcome = false;
    if (d1 && d2) {
      outcome = moment(d1).startOf('month').isSame(moment(d2).startOf('month'));
    }
    return outcome;
  }
  isSameYear(d1: Date, d2: Date): boolean {
    let outcome = false;
    if (d1 && d2) {
      outcome = moment(d1).startOf('year').isSame(moment(d2).startOf('year'));
    }
    return outcome;
  }
  isToday(date: Date): boolean {
    return date ? moment(date).startOf('day').isSame(moment(this.today())) : false;
  }
  format(date: Date): string {
    return moment(date).format('LLLL');
  }
}
