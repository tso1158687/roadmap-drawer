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
  locationData;
  currentLocation = {
    center: {
      lat: this.lat,
      lng: this.lng
    }
  };
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
    // console.log(data);
    // console.log(data.getCenter().toJSON())
    console.log(data);
    const getCenter = data.getCenter().toJSON();
    const getNE = data.getNorthEast().toJSON();
    const getSW = data.getSouthWest().toJSON();
    const max = 30;
    console.log(getCenter);
    console.log(getNE);
    console.log(getSW);
    this.appService
      .getMaskInformation(getCenter, getNE, getSW, max)
      .subscribe(e => {
        console.log(e);
        this.locationData = e;
      });
  }
  // zoomChange(data){
  //   console.log('zoom change')
  //   console.log(data)
  // }
  // mapReady(data){
  //   console.log('map ready')
  //   console.log(data)
  // }
  markerClick(e) {
    console.log("maker click");
    e.open();
    this.isOpen = true;
  }
}
