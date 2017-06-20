import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { AddPage } from '../add/add';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = AddPage;
  tab3Root = AboutPage;
  
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
