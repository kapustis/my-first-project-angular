import { Component } from '@angular/core';

export interface Card{
  title:string
  body:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-first-project';
  showCart = true;

  cards: Card[] = [
    {title: "Card #1",body: "#1 some text "},
    {title: "Card #2",body: "#2 some text "},
    {title: "Card #3",body: "#3 some text "},
    {title: "Card #4",body: "#4 some text "},
  ]

  showCard(){
    this.showCart = !this.showCart;
  }
}
