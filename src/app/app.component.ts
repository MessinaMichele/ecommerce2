import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ECommerce } from './models/ecommerce.model';
import { Observable } from 'rxjs';

export class AppComponent {
  title = 'ECommerce'
  URL : "https://my-json-server.typicode.com/paolocarugati/PC_ecommerce/db";

  data : ECommerce;
  oECommerce : Observable<ECommerce>;
  
  constructor(public http: HttpClient) {
   this.oECommerce = http.get<ECommerce>(this.URL);
   this.oECommerce.subscribe(d => { alert ("ok!"); this.data = d;} ); 
   }
 }


