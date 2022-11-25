import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno="";
  uname="";
  pswd="";

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  register(){
    // alert('clicked register')
    var username=this.uname;
    var password=this.pswd;
    var acno=this.acno;

    const result=this.ds.register(acno,username,password);

    if(result){
      alert('Register Successful');
      this.router.navigateByUrl('')//login page
    }else{
      alert('Register Failed')
      this.router.navigateByUrl('register')
    }
    
  }
}
