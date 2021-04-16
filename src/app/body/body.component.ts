import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAUTH } from '../Entities/user-auth';
import 'rxjs/Rx';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Product } from '../Entities/product';
import { Master } from '../Config/master.model';
@Component({
  selector: 'gamachicas-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent extends Master implements OnDestroy, OnInit {
  notfound = false;
  idProduct: string;
  lstproduct: any;
  urldomain: String;

  constructor(public service: ApiService) {
    super(service);
    this.urldomain = this.service.getUrlDomain();
    this.listProduct();
  }
  ngOnInit(): void {
  
  }
  listProduct() {
   
    let produc: Product = { idProduct: 1 };
    this.service.listProduct(produc).pipe(takeUntil(this.ngUnsubscribe)).subscribe((responseapi: any) => {
      this.lstproduct = responseapi;
      console.log(responseapi);
      this.ngOnDestroy();
    }, (err: any) => {
      console.error(err);
      this.notfound = true;
    });
  }
}






