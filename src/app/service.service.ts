import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  // dataEmiter = new EventEmitter<string>();
  dataEmiter = new Subject<string>();


  raiseDataEmiterEvent(value: string){
    //this.dataEmiter.emit(value);
    this.dataEmiter.next(value);
  }

}
