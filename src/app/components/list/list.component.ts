import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  flag:boolean = true;

  shop_cart = new Array();

  shop_cart_finial = new Array();

  total:number=0;

  url:string;

  orderInfo:any;

  cart_flag:boolean=false;

  username:string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {

    this.url = this.dataService.constantsList.ORDER;

    this.shop_cart = JSON.parse(
              window.localStorage.getItem("cartState"));
    if(this.shop_cart != null){
        this.cart_flag = true;
        var len = this.shop_cart.length;
        for(var i = 0; i < len; i++){
          var count = 1;
         for(var j = i + 1; j < len; j++){
            if(this.shop_cart[i].name == this.shop_cart[j].name){
                count++;
              }
            }
            var flag = true;
            for(var h in this.shop_cart_finial){
              if(this.shop_cart[i].name == this.shop_cart_finial[h].name){
                flag = false;
              }

            }

            if(flag){
              var total = this.shop_cart[i].price.substr(1,this.shop_cart[i].price.length)*count;
              console.log(total);
              this.shop_cart_finial.push({product_id:this.shop_cart[i].id,
                                          name:this.shop_cart[i].name,
                                          price:this.shop_cart[i].price,
                                          image:this.shop_cart[i].image,
                                          count:count,
                                          total:total});
            }
          }
          for(var t in this.shop_cart_finial){
            this.total = this.total + this.shop_cart_finial[t].total;
            this.total = Number(this.total.toFixed(2));
            console.log(this.total);
          }
        }
    }

  ngOnInit() {}

  doSubmit() {
    this.username = JSON.parse(
              window.localStorage.getItem("userInfoState")).username;

    this.orderInfo = {username:this.username,
                      total:this.total,
                      carts:this.shop_cart_finial}

    this.dataService.postData(this.url,this.orderInfo, '').
        subscribe(order=>{
          alert(" Successful! Please check the order page!");
          window.localStorage.setItem("cartState",
                                    null);
          this.router.navigateByUrl("/order");
        })
  }

}
