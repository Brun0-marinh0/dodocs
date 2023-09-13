import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/organisms/main-nav/main-nav.component';
import { NavRouterComponent } from './components/molecules/nav-router/nav-router.component';
import { ShowRouterSelectedComponent } from './components/molecules/show-router-selected/show-router-selected.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTemplateComponent } from './components/templates/home-template/home-template.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NavRouterComponent,
    ShowRouterSelectedComponent,
    HomeComponent,
    HomeTemplateComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
