import { Component, Input, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  @Input() prodObj!:product;

  constructor() { }

  ngOnInit(): void {
  }

}
