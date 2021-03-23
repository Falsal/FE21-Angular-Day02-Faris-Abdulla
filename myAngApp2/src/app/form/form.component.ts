import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl:'./form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


 info = new FormGroup({

   firstName: new FormControl('',Validators.required),

   lastName: new FormControl('',Validators.required),

   age: new FormControl('',Validators.required),

   email:new FormControl('',Validators.required)

 });



 constructor() { }


 ngOnInit() {

 }



 onSubmit(){

    if(this.info.valid){

      var a = this.info.value;

      console.log(a)

   }

  }

}

