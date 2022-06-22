import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product} from 'products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;
  products: any = []  

  order() {
    window.alert('Your Order have benn made sucsessfully')

  }

  constructor(  private route: ActivatedRoute,private dataService:DataService,) { }
  

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data:any[])=>{
      this.products = data
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = parseInt(routeParams.get('productId') as string);
      this.product = this.products.find((product: { id: number; }) => product.id === productIdFromRoute);
      console.log(this.product);
    })
  }

}
