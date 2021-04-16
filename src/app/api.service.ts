import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationResponse } from './Entities/authentication-response';
import { UserAUTH } from './Entities/user-auth';
import { JwtRequest } from './Entities/Jwt-Request';
import { Product } from './Entities/product';
import { environment } from './../environments/environment';
import {HomeViewModel} from 'src/app/Entities/View/HomeViewModel';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  numero: number = 0;
  baseUrl = environment.ApiUrl;
  ApiUrlBackEnd = environment.ApiUrlBackEnd;
  notfound = false;
  aut: UserAUTH;
  Token = "";
  tokenString: String;
   message:any;
  constructor(private httpClient: HttpClient) { }
  getToken(jwreqyest: JwtRequest): Observable<UserAUTH> {
    try {
      return this.httpClient.post<UserAUTH>(this.baseUrl + "/authenticate", jwreqyest);
      throw new Error('An error occurred');
    }
    catch (error) {
      console.error('Here is the error message', error);
    }
  }
  getUrlDomain() {
    try {

      return this.baseUrl;
      throw new Error('An error occurred');
    }
    catch (error) {
      console.error('Here is the error message', error);
    }
  }
  listProduct(product: Product): Observable<any> {
    try {
      let keySearch: String = 'ZarmirD';
      const postData = JSON.stringify(keySearch);
      return this.httpClient.post<any>(this.baseUrl + '/WebServiceProduct/ListProduct/', 'keySearchrs');
      throw new Error('An error occurred');
    }
    catch (error) {
      console.error('Here is the error message', error);
    }
  }
  HomeProductIns(homeviewModelo: HomeViewModel, file: any): Observable<any> {
    try {
      debugger;
      const product = JSON.stringify(homeviewModelo);
      const formData = new FormData();
      const turl=this.baseUrl + '/WebServiceProduct/HomeProductIns';
      formData.append('id',product);
      if (file) {
        formData.append('file', file, file.name);
      }
      return this.httpClient.post<any>(turl, formData);
      //return this.httpClient.post<any>(this.baseUrl + '/WebServiceProduct/HomeProductIns', formData);
      //const postData = JSON.stringify(homeviewModelo);
      //return this.httpClient.post<any>(this.baseUrl + '/WebServiceProduct/HomeProductIns/', mData);
      throw new Error('An error occurred');
    }
    catch (error) {
      console.error('Here is the error message', error);
    }
  }

 // savefile(homeviewModelo: HomeViewModel, file: any): Observable<any> {
   // try {
     // debugger;
      //const mData = JSON.stringify(homeviewModelo);
      //const formData = new FormData();
      //let idImagen:any=1;
      //formData.append('idImagen', idImagen);
      //if (file) {
        //formData.append('file', file, file.name);
        //formData.append("file",file);
        //login(credentials): Observable<any> {
          //return this.httpClient.post(this.baseUrl + '/WebServiceImagen/savefile',formData).
          //map(data => data.json())
//}
       // this.httpClient.post(this.baseUrl + '/WebServiceImagen/savefile', formData, { observe: 'response' })
        //.subscribe((response) => {
          //if (response.status === 200) {
            //this.message = 'Image uploaded successfully';
          //} else {
            //this.message = 'Image not uploaded successfully';
         // }
        //}
        //);
      //const postData = JSON.stringify(homeviewModelo);
      //return this.httpClient.post<any>(this.baseUrl + '/WebServiceImagen/savefile/', formData);
      //throw new Error('An error occurred');
    
  //}
    //catch (error) {
      //console.error('Here is the error message', error);
    //}
  //}

}
function header() {
  let heaer: HttpHeaders;
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  heaer = reqHeader;
  console.log(heaer);
  return reqHeader;
}

