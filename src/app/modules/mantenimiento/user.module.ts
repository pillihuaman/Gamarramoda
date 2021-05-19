
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { primeNgModule } from 'src/app/app-primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {ListboxModule} from 'primeng/listbox';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    primeNgModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    ListboxModule,
    NgbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
