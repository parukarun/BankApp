import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // string interpolation - {{aim}} in html file
  aim="Your perfect banking partner"

  // property binding - [placeholder]="account" in html file
  account="Enter Your Account Number"

  acno='';
  pswd='';
  //(3rd execution)
//class - collection of properties and methods
//properties/variables

//userdefined methods //(4th execution)



  // dependency injection
  constructor(private router:Router, private ds:DataService) { //(1st execution)
    //it automatically invokes when the object is created
   }

  ngOnInit(): void { //(2nd execution)
    //for initial process of component 
    //lifecycle hook of Angular
  }
    acnoChange(event:any){
      
      this.acno=event.target.value;
      console.log(this.acno);
      
    }
    pswdChange(event:any){
      this.pswd=event.target.value
      console.log(this.pswd);
      
    }
    // login(a:any,b:any){
    //   // alert('Login clicked');
    //   var acno=a.value;
    //   var pswd=b.value;
    //   var userDetails=this.userDetails;

    //   if(acno in userDetails){
    //     if(pswd==userDetails[acno]['password']){
    //       alert('Login successful');
    //     }else{
    //       alert('Invalid Password');
    //     }
    //   }
    //   else{
    //     alert('Invalid user datails');
    //   }
    // }

    login(){
      // alert('Login clicked');
      var acno=this.acno;
      var pswd=this.pswd;
      var userDetails=this.ds.userDetails;

const result=this.ds.login(acno,pswd)
 if(result){
  alert('Login successful');
  this.router.navigateByUrl('dashboard');
  }else{
    alert('Login Failed');
  }
  
 }
}
      // if(acno in userDetails){
      //   if(pswd==userDetails[acno]['password']){
      //     alert('Login successful');
      //     this.router.navigateByUrl('dashboard');
      //   }else{
      //     alert('Invalid Password');
      //   }
      // }
      // else{
      //   alert('Invalid user datails');
      // }
    //}

