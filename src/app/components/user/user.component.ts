import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchUser:string;
  users:any[];
  url:string;

  constructor(private dataService:DataService,
              private route: ActivatedRoute,
              private router: Router) {

    this.url = this.dataService.constantsList.HOSTUser;
    console.log(this.url+"111111");
    this.dataService.getData(this.url, '', '').
        subscribe(users=>{
          this.users = users;
        })
  }

  ngOnInit() {

  }

  onSearch(){

    const url = this.url + this.searchUser;
    this.dataService.getData(url, '', '').
        subscribe(users=>{
          this.users = users;
        })
  }

  onDelete(id){
    const url = this.url+id;
    this.dataService.delData(url, '', '').
        subscribe(res=>{
          console.log("delete success");
          const url = this.url ;
          this.dataService.getData(url, '', '').
              subscribe(users=>{
                this.users = users;
              })
        })
  }


}
