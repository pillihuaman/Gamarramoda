import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {GamachicasProductComponent} from './body/gamachicas-product/gamachicas-product.component';
import { RegisterUserComponent } from './modules/mantenimiento/usuario/register-user/register-user.component';
const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'Product',
    component: GamachicasProductComponent,
  },
  {
    path: 'RegisterUser',
    component: RegisterUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


