import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyFunctionsApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CalculatePage } from '../pages/calculate/calculate';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyFunctionsApp,
    AboutPage,
    CalculatePage,
    AddPage,
    EditPage,
    ListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyFunctionsApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyFunctionsApp,
    AboutPage,
    CalculatePage,
    AddPage,
    EditPage,
    ListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
