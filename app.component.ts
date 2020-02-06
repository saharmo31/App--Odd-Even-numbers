import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNum: number[] = [];
  oddNum: number[]=[];


  IntervalGenerated(number: number){
    if (number % 2 === 0 )
      {this.evenNum.push(number);} else
      {this.oddNum.push(number); }
    }
}
