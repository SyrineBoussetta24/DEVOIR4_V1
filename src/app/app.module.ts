import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    AddInstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
