import { Component, OnInit } from '@angular/core';

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

// database
  userDetails:any={
    1000:{acno:1000,username:'sanil',password:1000,balance:1000},
    1001:{acno:1001,username:'mini',password:1001,balance:1000},
    1002:{acno:1002,username:'max',password:1002,balance:1000}
  }

  constructor() { //(1st execution)
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
    login(){
      // alert('Login clicked');
      var acno=this.acno;
      var pswd=this.pswd;
      var userDetails=this.userDetails;

      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
          alert('Login successful');
        }else{
          alert('Invalid Password');
        }
      }
      else{
        alert('Invalid user datails');
      }
    }

}
