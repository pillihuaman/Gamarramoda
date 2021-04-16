import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/product';
import { Imagen } from 'src/app/Entities/Imagen';
import { Price } from 'src/app/Entities/Price';
import { Response } from 'src/app/Entities/Response';
import {HomeViewModel} from 'src/app/Entities/View/HomeViewModel';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from  'src/app/api.service';
import { Master } from 'src/app/Config/master.model';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-gamachicas-product',
  templateUrl: './gamachicas-product.component.html',
  styleUrls: ['./gamachicas-product.component.scss']
})
export class GamachicasProductComponent  extends Master implements OnInit {
product:Product;
model: HomeViewModel;
formProduct:FormGroup;
selectedGroups: string[];
selectedFiled:FileList;
file:File;
selectedFiles: FileList;
currentFile: File;
progress = 0;
message = '';
response:Response= new Response();
closeResult: string;ng
public ngUnsubscribe = new Subject();
  constructor(private formbuildi:FormBuilder, public service: ApiService,public modalService: NgbModal) {
    super(service);
    this.formProduct = new FormGroup({
      productDescription: new FormControl(''),
      productName: new FormControl(''),
      imagenPositionWeb: new FormControl(''),
      imagenCountViews: new FormControl(''),
      priceHigherPrice: new FormControl(''),
      priceSmallerPrice: new FormControl('')
      });

   }

  ngOnInit(): void {
    //this.formProduct = this.formbuildi.group({
      //imagenImagendata: ['']
    //});
  }
  onFileChange(event) {

    if (event.target.files.length > 0) {
       this.file = event.target.files[0];
      //this.formProduct.get('imagenImagendata').setValue(this.file);
    }
  }
  public processForm(value)  {

   // var formdata= new FormData();
    //formdata.append('file',this.formProduct.get('imagenImagendata').value);
    value['groups'] = this.selectedGroups;
    this.model= new HomeViewModel();
    let product:Product=new Product();
    let imagen:Imagen= new Imagen();
    let price:Price= new Price();
    product.name=value.productName;
    product.description=value.productDescription;
 this.model.product=product;

 imagen.positionWeb=value.imagenPositionWeb;
 imagen.countViews=value.imagenCountViews;
 //imagen.filereader=handleUpload(this.file);
 this.model.imagen=imagen;
   
price.higherPrice=value.priceHigherPrice;
price.smallerPrice=value.priceSmallerPrice;   
this.model.price=price;
 /*this.service.ListImagenByTop(this.model.product,this.file).subscribe( (event:any) => {
   console.log(event);
 });*/

//this.service.upload( this.file).subscribe(
  //event => {
    //  this.message ="err"
      //this.fileInfos = this.uploadService.getFiles();
  //},
  //err => {
    //this.progress = 0;
    //this.message = 'Could not upload the file!';
    //this.currentFile = undefined;
  //});



//this.service.savefile(this.model,this.file).pipe(takeUntil(this.ngUnsubscribe)).subscribe((responseapi: any) => {
  //console.log(responseapi);
//}
//, (err: any) => {
  //console.error(err);

//);

   this.service.HomeProductIns(this.model,this.file).subscribe((responseapi: any) => {
    this.response.code=responseapi.code;
    console.log(responseapi);
    }, (err: any) => {
      console.error(err);

    });

  }
  open(content) {
    debugger;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
function handleUpload(file) :FileReader {
  const reader = new FileReader();
   reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader);
     console.error(" file convert");
    
      console.log(reader.result);
  };
   return reader;
}