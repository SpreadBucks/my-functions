import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyFunctionsApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
  pages: Array<{ title: string, component: any, index: number }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'My Functions', component: TabsPage, index: 0 },
      { title: 'Add New', component: TabsPage, index: 1 },
      { title: 'About', component: TabsPage, index: 2 }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();

    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNav() && page.index != null) {
      this.nav.getActiveChildNav().select(page.index);
    }
    // Set the root of the nav with params if it's a tab index
    else {
      this.nav.setRoot(page.component, params);
    }
  }
}
