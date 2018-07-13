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

  constructor( private dataService: DataService) {
      dataService.eventer.subscribe(loginInfo => {
          this.ifLogin = loginInfo.ifLogin;
          console.log("nav+++++" + this.ifLogin);
    });
  }
  ngOnInit() {

  }

}
