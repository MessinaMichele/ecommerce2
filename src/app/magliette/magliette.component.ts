// src/app/magliette/magliette.component.ts
import { Component, OnInit } from '@angular/core';
import { ECommerce, Maglietta } from '../models/ecommerce.model';

@Component({
  selector: 'app-magliette',
  templateUrl: './magliette.component.html',
  styleUrls: ['./magliette.component.css']
})
export class MaglietteComponent implements OnInit {
  magliette : Maglietta[];

  constructor(private ecommerceData: ECommerce) {}

  ngOnInit() {
    this.magliette = this.ecommerceData.magliette;
  }
}
