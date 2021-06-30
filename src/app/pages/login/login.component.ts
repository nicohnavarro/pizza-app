import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string='';
  password:string='';
  guestType:string='0';
  isLoading:boolean=false;
  notyf:Notyf = new Notyf();

  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onChange(guest:any){
    if(guest === 'admin'){
      this.email = 'admin@pizza.com';
      this.password = "123123"; 
    }

    if(guest === 'employee'){
      this.email = 'employee@pizza.com';
      this.password = "123123";
    }
  }

  login(event:any){
    event.preventDefault();
    this.isLoading = true;
    this.authSvc.login(this.email,this.password).then(data=>{
      this.isLoading = false;
      this.router.navigate([''])
    }).catch((err)=>{
      this.isLoading = false;
      this.notyf.error("Sorry we can't log you 🛂");
    })

    
  }

}
