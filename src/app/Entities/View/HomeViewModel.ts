import { Product } from '../product';
import {Price} from "../Price";
import {Imagen} from "../Imagen";
import {Detailimagen} from "../Detailimagen";

export class HomeViewModel
{
    public product:Product;
    public price:Price;
    public imagen:Imagen;
    public detailimagen:Detailimagen;
    constructor(){};
}