import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptops: any;

  constructor(private dsObj: DataService) { }

  ngOnInit(): void {
    this.dsObj.getLaptops().subscribe(
      getData => { this.laptops = getData },
      err => { console.log("Error in getting laptops data", err) }
    )
  }

}
