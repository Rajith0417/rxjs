import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  passedValue: string = "";

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.dataEmiter.subscribe((value)=>{
      this.passedValue = value;
    });
  }

}
