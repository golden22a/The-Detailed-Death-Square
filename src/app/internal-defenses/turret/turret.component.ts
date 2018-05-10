import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {
  private turret;
  @Input('num')
   num: number;

  constructor() { }

  ngOnInit() {
    this.turret='turret.png';
  }

}
