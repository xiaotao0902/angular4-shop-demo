import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shopping_list = [
    {
            name:"botanicula_1",
            price:"$0.19",
            image:"assets/images/Botanicula_8.jpg"
    },
    {
            name:"botanicula_2",
            price:"$0.04",
            image:"assets/images/Botanicula_2.jpg"
    },
    {
            name:"botanicula_3",
            price:"$0.09",
            image:"assets/images/Botanicula_7.jpg"
    },
    {
            name:"botanicula_4",
            price:"$0.12",
            image:"assets/images/Botanicula_4.jpg"
    },
    {
            name:"botanicula_5",
            price:"$0.11",
            image:"assets/images/Botanicula_5.jpg"
    },
    {
            name:"botanicula_6",
            price:"$0.13",
            image:"assets/images/Botanicula_6.jpg"
    }

  ];

  user = {
   username:""
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  addToList(shopping){
      this.dataService.eventer.emit(shopping);
  }

}
