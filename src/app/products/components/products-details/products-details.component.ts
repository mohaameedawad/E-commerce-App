import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  item!: any;
  id : any;
  loading = false;
  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        this.loading =true;
        this.service.singleProduct(this.id).subscribe( (res) => {
          this.loading =false,
          this.item = res
        }
          );
      }
    )
  }


}
