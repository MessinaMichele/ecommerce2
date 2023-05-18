
import { Component, OnInit } from '@angular/core';
import { ECommerce, Scarpa } from '../models/ecommerce.model';

@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css']
})
export class ScarpeComponent implements OnInit {
  scarpe: Scarpa[];

  constructor(private ecommerceData: ECommerce) {}

  ngOnInit() {
    this.scarpe = this.ecommerceData.scarpe;
  }
}