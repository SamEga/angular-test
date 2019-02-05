import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { WebProjectsPageComponent } from './components/web-projects-page/web-projects-page.component';
import { MobileAppPageComponent } from './components/mobile-app-page/mobile-app-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PicturesListComponent } from './components/pictures-list/pictures-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    WebProjectsPageComponent,
    MobileAppPageComponent,
    TeamPageComponent,
    AboutUsPageComponent,
    ContactsPageComponent,
    PicturesListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
