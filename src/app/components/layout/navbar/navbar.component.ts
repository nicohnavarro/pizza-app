import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed=true;
  user:any;
  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.authSvc.user;
  }

  logout(){
    this.authSvc.logOut().then(()=>{
      this.router.navigate(['login'])
    })
  }

}
