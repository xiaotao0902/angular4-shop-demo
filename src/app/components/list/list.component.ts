import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // shopping_list:Shopping[];

  flag:boolean = true;

  constructor(private dataService: DataService) {
        dataService.eventer.subscribe(loginInfo => {
            console.log("list+++++" + loginInfo);
      });

      //   dataService.shoppingEventer.subscribe(shopping => {
      //     dataService.defaultShopping = shopping;
      //     console.log("get ths shopping" + shopping.name);
      //     console.log("list size is  " + this.shopping_list.length);
      //     this.boolean = true;
      //     for(j in this.shopping_list) {
      //       if(this.shopping_list[j].name == shopping.name){
      //         this.flag = false;
      //         console.log("set fasle" + shopping.name);
      //       }
      //     }
      //     if(this.flag){
      //       this.shopping_list.push(shopping);
      //       console.log("push ths shopping" + shopping.name);
      //     }
      // });
  }

  ngOnInit() {}

}
