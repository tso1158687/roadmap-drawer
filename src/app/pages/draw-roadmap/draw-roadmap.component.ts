import { Component, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-draw-roadmap',
  templateUrl: './draw-roadmap.component.html',
  styleUrls: ['./draw-roadmap.component.scss']
})
export class DrawRoadmapComponent implements OnInit {

  ngOnInit() {
  }
  downloadImage(){
    const node = document.getElementById('draw-area');
    domtoimage.toBlob(node)
    .then((blob)=> {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'roadmap';
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 0)
    });
  }
}
