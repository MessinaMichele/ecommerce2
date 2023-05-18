// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScarpeComponent } from './scarpe/scarpe.component';
import { MaglietteComponent } from './magliette/magliette.component';

const routes: Routes = [
  { path: 'scarpe', component: ScarpeComponent },
  { path: 'magliette', component: MaglietteComponent },
  { path: '', redirectTo: '/scarpe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
