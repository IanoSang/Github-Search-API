import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesDisplayComponent } from './components/profiles-display/profiles-display.component';
import { ReposDisplayComponent } from './components/repos-display/repos-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesDisplayComponent,
    ReposDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
