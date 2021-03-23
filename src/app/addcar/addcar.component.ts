import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  addCarForm = new FormGroup({
    image: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    color: new FormControl(''),
    year: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor() { }
  staticImage:string="https://blog.dupontregistry.com/wp-content/uploads/2021/01/574590-scaled.jpg"
  cars = [
    {
      image: '../../assets/images/image4.jpg',
      name: "Ferrari",
      color: 'blue',
      year: 2010,
      price: 10000
    },
    {
      image: '../../assets/images/image3.jpg',
      name: "Mazda",
      color: 'red',
      year: 2010,
      price: 15000
    },
    {
      image: '../../assets/images/image2.jpg',
      name: "Cadillac",
      color: 'golden',
      year: 2010,
      price: 80000
    }
  ];
  
  onSubmit() {
    if (this.addCarForm.valid) {
      var a = this.addCarForm.value;
      console.table(a)
      this.cars.push(a);
    }
  }

  ngOnInit(): void {
  }


}
