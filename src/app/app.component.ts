import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'roadmap-drawer';
  lat: number = 25.0470782;
  lng: number = 121.5139071;
  zoomValue: number = 15;
  ngOnInit(){
  }
}