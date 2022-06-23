import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  departBackground: string = 'url( https://st2.depositphotos.com/2234518/8533/i/600/depositphotos_85338490-stock-photo-woman-working-at-cafe.jpg)'
  constructor() { }

  ngOnInit(): void {
  }

}
