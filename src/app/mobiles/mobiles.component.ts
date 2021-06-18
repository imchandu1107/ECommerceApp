import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles: any;

  constructor(private dsObj: DataService) { }

  ngOnInit(): void {
    this.dsObj.getMobiles().subscribe(
      getData => { this.mobiles = getData },
      err => { console.log("Error in getting mobiles data", err) }
    )
  }

}
