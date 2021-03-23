import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';



@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  info = new FormGroup({

    firstName: new FormControl('',Validators.required),
 
    lastName: new FormControl('',Validators.required),
 
    email:new FormControl('',Validators.required),
    
    message: new FormControl('',Validators.required)
 
  });

  constructor() { }

  onSubmit(){

    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
   }

  }

  ngOnInit(): void {
  }

}
