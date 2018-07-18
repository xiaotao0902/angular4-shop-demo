import { Component,OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ifLogin:boolean=false;

  loginInfo:any;

  constructor( private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router) {
      dataService.eventer.subscribe(loginInfo => {
          this.ifLogin = loginInfo.ifLogin;
          console.log("nav+++++" + this.ifLogin);
    });
  }
  ngOnInit() {
    this.ifLogin = JSON.parse(
              window.localStorage.getItem("userInfoState")).ifLogin;
  }

  doLogout() {
    this.loginInfo = {username: '', ifLogin:false};
    window.localStorage.setItem("userInfoState",
                              JSON.stringify(this.loginInfo));
    window.localStorage.setItem("cartState",
                              null);
    this.router.navigateByUrl("/home");
  }

}
