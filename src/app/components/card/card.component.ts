import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() 'myobj':any;
  public contentLoaded:boolean= false;
  constructor() { }

  ngOnInit(): void {

    console.warn(this.myobj);
    setTimeout(() =>{
      this.contentLoaded=true

    },8000)

  }

}
