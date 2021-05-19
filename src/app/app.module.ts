import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { GamachicasProductComponent } from './body/gamachicas-product/gamachicas-product.component';
import { RegisterUserComponent } from './modules/mantenimiento/usuario/register-user/register-user.component';
import { primeNgModule } from './app-primeng.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {TableModule} from 'primeng/table'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    GamachicasProductComponent,
    RegisterUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    primeNgModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    //TableModule
  ],
  exports: [
    primeNgModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
      

    },
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
