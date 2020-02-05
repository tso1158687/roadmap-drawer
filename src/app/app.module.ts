import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DrawRoadmapComponent } from "./pages/draw-roadmap/draw-roadmap.component";
import { MatToolbarModule } from "@angular/material/toolbar";
@NgModule({
  declarations: [AppComponent, DrawRoadmapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
