import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { WelcomeComponent }   from './welcome.component';
import { AboutComponent }   from './about.component';
import { LocationsComponent }   from './locations.component';
import { AlbumListComponent }   from './album-list.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    LocationsComponent,
    AlbumListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }