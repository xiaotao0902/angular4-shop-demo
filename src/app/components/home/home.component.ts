import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shopping_list : any[];

  ifLogin:boolean;

  shop_cart = new Array();

  url:string;

  constructor(private dataService: DataService) {

    this.url = this.dataService.constantsList.PRODUCT;

    this.dataService.getData(this.url,'', '').
        subscribe(shopping_list=>{
          this.shopping_list = shopping_list;
        })
  }

  ngOnInit() {
    this.ifLogin = JSON.parse(
              window.localStorage.getItem("userInfoState")).ifLogin
  }

  addToList(shopping){
      if(!this.ifLogin){
         alert("Please sign in !");
      }else{
          this.shop_cart.push(shopping);
          window.localStorage.setItem("cartState",
                                    JSON.stringify(this.shop_cart));
          alert("Add Successfully !");
      }

  }

}
