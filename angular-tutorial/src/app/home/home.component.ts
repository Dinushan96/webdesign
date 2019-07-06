import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
    h1Style: boolean = true; 
   
    constructor() { } 
   
    ngOnInit() {   } 
   
    styleChange() {     
      this.h1Style = !this.h1Style;   
    } 
   
} 
   


