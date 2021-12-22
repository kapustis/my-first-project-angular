import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card = { title:'no title', body: 'no body'};

  img1 = "https://img.icons8.com/stickers/2x/safari.png";
  img2 = "https://img.icons8.com/stickers/2x/chrome.png";

  imgUrl = this.img1;

  constructor() {

  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.imgUrl === this.img1){
        this.imgUrl = this.img2
      }else {
        this.imgUrl = this.img1;
      }


    }, 3000)
  }

  inputHandler(value: any) {
    // console.log(event.target.value)
    this.card.title = value;
  }
}
