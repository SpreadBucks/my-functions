import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-edit-details',
  templateUrl: 'edit.html'
})
export class EditPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
