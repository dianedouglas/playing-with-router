import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent }   from './welcome.component';
import { AboutComponent }   from './about.component';
import { LocationsComponent }   from './locations.component';
import { AlbumListComponent }   from './album-list.component';


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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
