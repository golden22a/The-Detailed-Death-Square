import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-square',
  templateUrl: './death-square.component.html',
  styleUrls: ['./death-square.component.css']
})

export class DeathSquareComponent implements OnInit {
  private turretNumber= [];
  constructor() { }

  ngOnInit() {
    for(let i =1 ; i<85; i++){
      this.turretNumber.push(i);
    }
  }

}
