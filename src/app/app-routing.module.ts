import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { MobileAppPageComponent } from './components/mobile-app-page/mobile-app-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { WebProjectsPageComponent } from './components/web-projects-page/web-projects-page.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'mobile', component: MobileAppPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'web-projects', component: WebProjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
