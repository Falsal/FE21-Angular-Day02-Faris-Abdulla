import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  info = new FormGroup({

    firstName: new FormControl('',Validators.min(4)),
 
    lastName: new FormControl('',Validators.required),
 

    email:new FormControl('',Validators.email),
    
    message: new FormControl('',Validators.required)
 
  });

  constructor() { }

  onSubmit(){
    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
   } else alert('check your input again')
  }


  ngOnInit(): void {
  }

}
