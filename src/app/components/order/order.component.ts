import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders = new Array();

  url:string;

  username:string;

  id:string;

  total:string;

  date:string;

  constructor( private dataService: DataService ) {

      this.panelsize = this.orders.length*90 + "px";

      this.url = this.dataService.constantsList.ORDER;

      this.username = JSON.parse(
                window.localStorage.getItem("userInfoState")).username;
      let url = this.url + "?username=" + this.username
      this.dataService.getData(url,'', '').
          subscribe(orders=>{
            this.orders = orders;
            this.id = this.orders[0].id;
            this.total = this.orders[0].total;
            this.date = this.orders[0].date;
          });
    }

  ngOnInit() {
  }

}
