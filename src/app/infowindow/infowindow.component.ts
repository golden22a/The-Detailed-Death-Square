import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-infowindow',
  templateUrl: './infowindow.component.html',
  styleUrls: ['./infowindow.component.css']
})
export class InfowindowComponent implements OnInit {
  dataBank: any;
  constructor(private http: Http,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(x=>{
      this.findTurret(x.id);
    })

  }
  findTurret(number){
  this.http.get(`http://localhost:3000/api/turret/${number}`).toPromise().then(res => {
    console.log(res.json());
    this.dataBank=res.json();
  }).catch(err => {
    this.dataBank = {
turretNumber:number,
damage:"No available data"
    }
    })
  }
}
