import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RonSwansonService } from './ron-swanson.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RonSwansonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
