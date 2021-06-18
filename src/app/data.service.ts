import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
  getMobiles(): Observable<product> {
    return this.hc.get<product>("http://localhost:3000/mobiles")
  }

  getLaptops(): Observable<product> {
    return this.hc.get<product>("http://localhost:3000/laptops")
  }

  getTelevisions(): Observable<product> {
    return this.hc.get<product>("http://localhost:3000/televisions")
  }
}
