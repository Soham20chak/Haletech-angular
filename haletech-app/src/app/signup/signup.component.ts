import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  credentials={
    username:'',
    password:''
  }
  constructor(){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log("Form is submitted");
    if((this.credentials.username !='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      
    }
  }

}
