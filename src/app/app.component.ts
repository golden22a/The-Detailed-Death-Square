import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private tieNumber;
  ngOnInit() {
    this.tieNumber=Array(37).fill(0);
  }

}
