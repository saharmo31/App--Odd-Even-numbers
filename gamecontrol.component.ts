import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() IntervalCreated = new EventEmitter< number  >();
  cnt = 0;
  Interval;
  constructor() { }

  ngOnInit() {
  }

  /* count(){
    this.cnt=this.cnt+2;
   } */

     start(){
      /* this.stopc=setInterval(() => {this.count(); }, 1000); */
      this.Interval = setInterval(() => {this.IntervalCreated.emit(this.cnt + 1); this.cnt++; }, 1000);

    }

    stop() {

        clearInterval(this.Interval);

    }

}
