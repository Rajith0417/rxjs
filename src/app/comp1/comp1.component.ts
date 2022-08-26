import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  dataToPass: string = "";

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  toSend(){
    alert("-");
    this.service.raiseDataEmiterEvent(this.dataToPass);

  }

}
