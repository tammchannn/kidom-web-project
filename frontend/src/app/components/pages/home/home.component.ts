import { Component } from '@angular/core';
import { Banner } from '../../../shared/models/Banner';
import { BannerService } from '../../../services/banner.service';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { CatagoryService } from '../../../services/catagory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  banners: Banner[] = [];
  products: Product[] = [];
  catagorys: Catagory[] =[]

  constructor(private bannerServices: BannerService, private productServices: ProductService, private catagoryServices: CatagoryService) { 
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();
    this.catagorys= catagoryServices.getAll()
  }
}
