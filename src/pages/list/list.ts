import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CalculatePage } from '../calculate/calculate';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Item ' + (i + 1),
        note: 'This is item #' + (i + 1),
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(CalculatePage, {
      item: item
    });
  }
}
