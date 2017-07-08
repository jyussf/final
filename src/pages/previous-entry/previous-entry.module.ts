import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousEntryPage } from './previous-entry';

@NgModule({
  declarations: [
    PreviousEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousEntryPage),
  ],
  exports: [
    PreviousEntryPage
  ]
})
export class PreviousEntryPageModule {}
