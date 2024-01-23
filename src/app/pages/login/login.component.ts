import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string="";
  password:string="";

  constructor(private auth:AuthService,private router:Router){}

  onSubmit(){
    console.log(this.auth.login(this.username,this.password))
    if(this.auth.login(this.username,this.password)){
      this.router.navigate(['notes'])
    }
  }
}
