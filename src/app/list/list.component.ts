import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {
  carList=[
    {
      carName:'BMW',
      yearMake:'1990',
      image:'../../assets/images/bmw-1988.jpg',
      price: 23000
    },
    {
      carName:'Mercedes',
      yearMake:'1988',
      image:'../../assets/images/image1.jpg',
      price: 15000
    },
    {
      carName:'Toyota',
      yearMake:'2010',
      image:'../../assets/images/image2.jpg',
      price: 24000
    },
    {
      carName:'Ford',
      yearMake:'2020',
      image:'../../assets/images/image3.jpg',
      price: 15000
    },
  ]

  constructor() { }

  

  ngOnInit(): void {
  }

}
