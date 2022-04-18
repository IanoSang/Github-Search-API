import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesDisplayComponent } from './components/profiles-display/profiles-display.component';
import { ReposDisplayComponent } from './components/repos-display/repos-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeAgoPipe } from './time-ago.pipe';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProfilesDisplayComponent,
    ReposDisplayComponent,
    NavbarComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
