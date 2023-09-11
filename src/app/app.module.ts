import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/organisms/main-nav/main-nav.component';
import { NavRouterComponent } from './components/molecules/nav-router/nav-router.component';
import { ShowRouterSelectedComponent } from './components/molecules/show-router-selected/show-router-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NavRouterComponent,
    ShowRouterSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
