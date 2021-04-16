import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {GamachicasProductComponent} from './body/gamachicas-product/gamachicas-product.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'Product',
    component: GamachicasProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
