import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ECommerce } from './models/ecommerce.model';

export class AppComponent implements OnInit {
  data: ECommerce;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<ECommerce>('https://4200-paolocaruga-01angularem-5efmkm03841.ws-eu97.gitpod.io/')
      .subscribe(response => {
        this.data = response;
      });
  }
}

