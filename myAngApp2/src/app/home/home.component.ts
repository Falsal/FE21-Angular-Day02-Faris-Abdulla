import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({

 selector: 'home',

 templateUrl:'./home.component.html',

 styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

   
    cars=[
        {
            "brand": "VW",
            "type": "Golf 6",
            "PS": "130",
            "price": "25",
            "img":"../../assets/img/p1.jpg"
          }, {
            "brand": "Ford",
            "type": "Galaxy",
            "PS": "120",
            "price": "22",
            "img":"assets/img/p2.jpg"
          },{
            "brand": "Toyota",
            "type": "Auris",
            "PS": "136",
            "price": "21",
            "img":"../../assets/img/p3.jpg"
          },{
            "brand": "BMW",
            "type": "3er",
            "PS": "159",
            "price": "31",
            "img":"assets/img/p4.jpg"
          }
    ];

    
   
 addCarInSore=new FormGroup({
     brand:new FormControl('',[Validators.required,Validators.minLength(5)]),
     type:  new FormControl('',Validators.required),
     PS:    new FormControl('',Validators.required),
     price: new FormControl('',Validators.required),
     img: new FormControl('',[Validators.required,Validators.minLength(6)]),
    });


 
 constructor() { }



 onAdd(){
     
     if(this.addCarInSore.valid){
     var a =this.addCarInSore.value;
     console.table(this.cars);
     this.cars.push(a);
       
     console.table(this.cars);

     }

 }

 ngOnInit() {

 }

 openStaffArea() {
  document.getElementById("staffOnly")?.classList.toggle("d-none");
  }

}

