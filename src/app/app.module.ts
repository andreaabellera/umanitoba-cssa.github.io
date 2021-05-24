import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar/navigation-bar.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleDown, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSlack, faFacebookSquare, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    NavigationBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faArrowAltCircleDown);
    library.addIcons(faBars);
    library.addIcons(faEnvelope);
    library.addIcons(faDiscord);
    library.addIcons(faSlack);
    library.addIcons(faFacebookSquare);
    library.addIcons(faInstagram);
    library.addIcons(faLinkedin);
    library.addIcons(faGithub);
  }
}
