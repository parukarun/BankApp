import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// deposit properties
  acno='';
  pswd='';
  amount='';

  // withdraw properties
  

  // current user - login name

  user="";

  // system date

  sdate:any;

    // deposit model1
  depositForm=this.fb.group({ //group
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]], //array

  })
     // withdraw model1
     withdrawForm=this.fb.group({ //group
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
      amount:['',[Validators.required,Validators.pattern('[0-9]*')]], //array
  
    })

  constructor(private ds:DataService ,private fb:FormBuilder, private router:Router ,) {
    this.user=this.ds.currentUser;
    this.sdate=new Date()
   }

  

  ngOnInit(): void {
    if(!localStorage.getItem('CurrentAcno')){
      alert('Please login first')
      this.router.navigateByUrl('');
    }
  }
  deposit(){
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;

    if(this.depositForm.valid){
      const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(`${amount} is credited..Available balance is ${result}`)
    }else{
      alert('Transaction Error')
    }
    }else{
      alert('Invalid Form');
    }
    
    // alert('Clicked')
  }
  withdraw(){

    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount = this.withdrawForm.value.amount;

    if(this.depositForm.valid){
      const result = this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`${amount} is debited..Available balance is ${result}`)
    }else{
      alert('Transaction Error')
    }
    }else{
      alert('Invalid Form');
    }
    

    // alert('Clicked')
  }

  logout(){
    //remove username and acno
    localStorage.removeItem('CurrentAcno')
    localStorage.removeItem('CurrentUser')
    this.router.navigateByUrl('')
  }
  delete(){
   this.acno=JSON.parse(localStorage.getItem('CurrentAcno')||'');
  }
  onCancel(){
    this.acno="";
  }

}
