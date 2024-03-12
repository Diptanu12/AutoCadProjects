import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gallery2DComponent } from './gallery2-d/gallery2-d.component';
import { Gallery3DComponent } from './gallery3-d/gallery3-d.component';
import { GallerySiteComponent } from './gallery-site/gallery-site.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  
  { path: 'gallery2d', component: Gallery2DComponent },
  { path: 'gallery3d', component: Gallery3DComponent },
  { path: 'gallery-site', component:GallerySiteComponent },
  { path: '', component:AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
