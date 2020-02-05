import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DrawRoadmapComponent } from "./pages/draw-roadmap/draw-roadmap.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  { path: "", component: DrawRoadmapComponent },
  { path: "about", component: AboutComponent },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
