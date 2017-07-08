import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { EntryPage } from '../pages/entry/entry';
import { PreviousEntryPage } from '../pages/previous-entry/previous-entry';
import { SummaryPage } from '../pages/summary/summary';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register'

import { AppUsersProvider } from '../providers/app-users/app-users';
import { EntryLogProvider } from '../providers/entry-log/entry-log';

let injections: any[] = [
    MyApp,
    LobbyPage,
    EntryPage,
    PreviousEntryPage,
    SummaryPage,
    LandingPage,
    LoginPage,
    RegisterPage
  ]

@NgModule({
  declarations: injections, 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUsersProvider,
    EntryLogProvider
  ]
})
export class AppModule {}


