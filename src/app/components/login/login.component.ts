import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username:"",
    password:""
  };

  loginInfo:any;

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

      else{
        const url = this.url + this.user.username;
        this.dataService.getData(url,'', '').
            subscribe(user=>{
              if(user==null){
                alert(" Account or password error, login failed!");
                return;
              }
              else if(this.user.password!=user[0].password){
                alert(" Account or password error, login failed!");
                return;
              }
              else{
                this.loginInfo = {username: user[0].username, ifLogin:true};
                this.dataService.eventer.emit(this.loginInfo);

                window.localStorage.setItem("userInfoState",
                                          JSON.stringify(this.loginInfo));
                this.router.navigateByUrl("/home");
              }
            })
      }
    }
}
