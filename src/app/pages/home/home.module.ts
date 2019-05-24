import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matModule } from 'app/shared/mat.module';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ...matModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeModule { }
