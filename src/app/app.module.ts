import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShareModule } from './share/share.module';
import { DrawRoadmapComponent } from './pages/draw-roadmap/draw-roadmap.component';
import { AboutComponent } from './pages/about/about.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [AppComponent,DrawRoadmapComponent,AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8F4_cdzaJDI7by8YBhOh85DfpAKFY_9U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
