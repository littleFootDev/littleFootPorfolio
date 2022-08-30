import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainReseauxComponent } from './contain-reseaux/contain-reseaux.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainReseauxComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
