import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OsmMapComponent } from './osm-map/osm-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxLeafletFullscreenModule } from '@runette/ngx-leaflet-fullscreen';
import { NgxLeafletLocateModule } from '@runette/ngx-leaflet-locate';
import { NgxLoadingControlModule } from '@runette/ngx-leaflet-loading';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OsmMapComponent
  ],
  imports: [
    BrowserModule,LeafletModule,NgxLeafletFullscreenModule,NgxLeafletLocateModule,FormsModule,NgxLoadingControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
