import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter:number=0;
  constructor() {
   }
   countClick(){
    this.clickCounter++
    console.log(this.clickCounter)
  }

  ngOnInit(): void {
  }

}
