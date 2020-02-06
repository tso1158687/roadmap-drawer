import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(
    private http: HttpClient
  ) { }
  getPosition(): Promise<any> {
    console.log('get position')
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resp => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        err => {
          reject(err);
        }
      );
    });
  }
  getMaskInformation() {
    let data = {
      "center": {
        "lat": 25.012879973038828,
        "lng": 121.46774984444964
      },
      "bounds": {
        "ne": {
          "lat": 25.02146473590576,
          "lng": 121.48491598214495
        },
        "se": {
          "lat": 25.004294609977798,
          "lng": 121.48491598214495
        },
        "sw": {
          "lat": 25.004294609977798,
          "lng": 121.45058370675433
        },
        "nw": {
          "lat": 25.02146473590576,
          "lng": 121.45058370675433
        }
      },
      "max": 10
    }
    return this.http.post('https://endpoint-dot-mask-9999.appspot.com/stores', data)
  }
}
// {
//   "center": {
//     "lat": 25.012879973038828,
//     "lng": 121.46774984444964
//   },
//   "bounds": {
//     "ne": {
//       "lat": 25.02146473590576,
//       "lng": 121.48491598214495
//     },
//     "se": {
//       "lat": 25.004294609977798,
//       "lng": 121.48491598214495
//     },
//     "sw": {
//       "lat": 25.004294609977798,
//       "lng": 121.45058370675433
//     },
//     "nw": {
//       "lat": 25.02146473590576,
//       "lng": 121.45058370675433
//     }
//   },
//   "max": 10
// }