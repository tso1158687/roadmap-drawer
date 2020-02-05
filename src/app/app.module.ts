import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShareModule } from './share/share.module';
import { DrawRoadmapComponent } from './pages/draw-roadmap/draw-roadmap.component';
import { AboutComponent } from './pages/about/about.component';
@NgModule({
  declarations: [AppComponent,DrawRoadmapComponent,AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
