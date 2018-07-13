import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  user = {
    username:"",
    password:""
  };
  password = {repassword:""};

  url:string;

  constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private router: Router) {

        this.url = this.dataService.constantsList.ACCOUNTUser;
       }

  ngOnInit() {
  }

  doSubmit(){

      if(this.user.username==''){
          alert(" Please enter username!");
          return;
        }

      else if(this.user.password==''){
          alert(" Please enter password!");
          return;
        }

      else if(this.password.repassword==''){
          alert(" Please enter repassword!");
          return;
        }

      else if(this.password.repassword!=this.user.password!){
        alert(" Two input password must be consistent!");
        return;
      }

      else{
        const url = this.url;
        this.dataService.postData(url,this.user, '').
            subscribe(users=>{
              console.log("post" + this.user);
              alert(" Registered successfully !");
              this.router.navigateByUrl("/home");
            })
      }
    }

}
