import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {
  televisions: any

  constructor(private dsObj: DataService) { }

  ngOnInit(): void {
    this.dsObj.getTelevisions().subscribe(
      getData => { this.televisions = getData },
      err => { console.log("Error in getting televisions data", err) }
    )
  }

}
