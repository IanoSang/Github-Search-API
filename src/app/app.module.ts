import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesDisplayComponent } from './components/profiles-display/profiles-display.component';
import { ReposDisplayComponent } from './components/repos-display/repos-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { ButtonHighlightDirective } from './button-highlight.directive';
import { FooterComponent } from './components/footer/footer.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProfilesDisplayComponent,
    ReposDisplayComponent,
    NavbarComponent,
    TimeAgoPipe,
    ButtonHighlightDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
