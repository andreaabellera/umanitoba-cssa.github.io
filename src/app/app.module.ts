import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleDown, faBars, faTimes, faEnvelope, faGlobe, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSlack, faFacebookSquare, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Components for the CSSA Website
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { WelcomePanelComponent } from './welcome-panel/welcome-panel.component';
import { AboutComponent } from './about/about.component';
import { ExecsComponent } from './execs/execs.component';
import { ExecCardComponent } from './exec-card/exec-card.component';
import { ImgBarComponent } from './img-bar/img-bar.component';
import { EventsComponent } from './events/events.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    //FormsModule
  ],
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WelcomePanelComponent,
    AboutComponent,
    ExecsComponent,
    ExecCardComponent,
    ImgBarComponent,
    EventsComponent,
    ResourcesComponent,
    ResourceCardComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faArrowAltCircleDown);
    library.addIcons(faBars);
    library.addIcons(faTimes);
    library.addIcons(faEnvelope);
    library.addIcons(faGlobe);
    library.addIcons(faDiscord);
    library.addIcons(faSlack);
    library.addIcons(faFacebookSquare);
    library.addIcons(faInstagram);
    library.addIcons(faLinkedin);
    library.addIcons(faGithub);
    library.addIcons(faExternalLinkAlt);
  }*/
  faArrowAltCircleDown = faArrowAltCircleDown
  faBars = faBars
  faTimes = faTimes
  faEnvelope = faEnvelope
  faGlobe = faGlobe
  faDiscord = faDiscord
  faSlack = faSlack
  faFacebookSquare = faFacebookSquare
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGithub = faGithub
  faExternalLinkAlt = faExternalLinkAlt
}
