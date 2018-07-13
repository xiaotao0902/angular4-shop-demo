import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  name:string;
  users:any[];
  user = {
    _id:"",
    name:"",
    sex:"",
    age:"",
    tel:"",
    address:""
  };
  url:string;

  constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private router: Router
  ) {
      this.url = this.dataService.constantsList.HOSTUser;
      this.route.params.subscribe((params:Params)=>{
          console.log(params.name);
          this.name = params.name;
    })

    if(this.name!='add'){
        const url = this.url + this.name;
        this.dataService.getData(url, '', '').
            subscribe(users=>{
              this.users = users;
              this.user = this.users[0];
              console.log(this.user);
            })
      }
  }

  ngOnInit() {
  }

  onSubmit(){

    if(this.name =='add'){

      var rnd="";
      for(var i=0;i<12;i++)
          rnd+=Math.floor(Math.random()*10);
      this.user._id = rnd;

      console.log(this.user._id);
      const url = this.url;
      this.dataService.postData(url,this.user, '').
          subscribe(users=>{
            console.log("post" + this.users);
            this.router.navigateByUrl("/user");
          })
    }
    else{
      const url = this.url + this.user._id;
      console.log("put" + url);
      console.log(this.user);
      this.dataService.putData(url,this.user, '').
          subscribe(users=>{
            console.log("post" + this.users);
            this.router.navigateByUrl("/user");
          })
        }
    }

}
