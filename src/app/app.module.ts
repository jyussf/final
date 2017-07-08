import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { EntryPage } from '../pages/entry/entry';
import { PreviousEntryPage } from '../pages/previous-entry/previous-entry';
import { SummaryPage } from '../pages/summary/summary';

let injections: any[] = [
    MyApp,
    LobbyPage,
    EntryPage,
    PreviousEntryPage,
    SummaryPage
  ]

@NgModule({
  declarations: injections, 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}


