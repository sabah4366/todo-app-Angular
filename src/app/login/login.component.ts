import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { TaskserviceService } from '../services/taskservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform=new FormGroup({
    "username":new FormControl('',Validators.required),
    "password":new FormControl('',Validators.required)
  })
  constructor(private service:TaskserviceService,private router:Router){}

  get username(){
    return this.loginform.get('username')
  }

  get password(){
    return this.loginform.get('password')

  }

  authenticate(){
    console.log(this.loginform.value);

    this.service.getToken(this.loginform.value).then(res=>res.json()).then(data=>{
      let token=data.token
      localStorage.setItem("token","Token "+token)
      this.router.navigateByUrl("home")
    })
    
  }



}
