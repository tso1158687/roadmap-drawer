import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "roadmap-drawer";
  lat: number = 25.0470782;
  lng: number = 121.5139071;
  zoomValue: number = 15;
  isOpen = false;
  constructor(private appService: AppService) {}
  ngOnInit() {
    // this.appService.getPosition().then(e=>{console.log(e)})
    this.appService.getPosition().then(e => {
      console.log(e);
      this.lat = e.lat;
      this.lng = e.lng;
    });
  }
  changeLocation(data) {
    console.log(data);
  }
  markerClick(e) {
    console.log("maker click");
    e.open()
    this.isOpen = true;
  }
}
