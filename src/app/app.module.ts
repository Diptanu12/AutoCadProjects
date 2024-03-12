import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { Gallery2DComponent } from './gallery2-d/gallery2-d.component';
import { Gallery3DComponent } from './gallery3-d/gallery3-d.component';
import { GallerySiteComponent } from './gallery-site/gallery-site.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    Gallery2DComponent,
    Gallery3DComponent,
    GallerySiteComponent,
    AboutComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Make sure AppRoutingModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
