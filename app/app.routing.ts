import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent }   from './welcome.component';
import { AboutComponent }   from './about.component';
import { LocationsComponent }   from './locations.component';
import { AlbumListComponent }   from './album-list.component';
import { AlbumDetailsComponent }   from './album-details.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'album-details/:id',
    component: AlbumDetailsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
