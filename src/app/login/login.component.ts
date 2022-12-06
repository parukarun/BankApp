import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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


 // login model1
  
  loginForm=this.fb.group({ //group
   
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
 
  // dependency injection
  constructor(private router:Router, private ds:DataService, private fb:FormBuilder) { //(1st execution)
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
       

      var acno=this.loginForm.value.acno;
      var pswd=this.loginForm.value.pswd;
      var userDetails=this.ds.userDetails;

      if(this.loginForm.valid){
        const result=this.ds.login(acno,pswd)
        if(result){
           alert('Login successful');
           this.router.navigateByUrl('dashboard');
         }else{
           alert('Login Failed');
         }
      }
      else{
        alert('Invalid Form');
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

