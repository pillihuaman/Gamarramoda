import { Component, OnInit } from '@angular/core';
import { primeNgModule } from '../../../../app-primeng.module';
import { MessageService, Message } from 'primeng/api'
import { Product } from '../../../../Entities/product';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  providers: [MessageService]
})
export class RegisterUserComponent implements OnInit {
 products: Product[];


  constructor() { }

  ngOnInit() {
    debugger;
    this.products=[];
    let producto = new Product();
    producto.name = "papa";
    producto.idPrice = 1;
    producto.description = 'papa rica';
    this.products.push(producto);

     // this.productService.getProductsSmall().then(data => this.products = data);
  }

}
