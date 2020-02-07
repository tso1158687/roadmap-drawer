import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
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
  getMaskInformation(center,ne,sw,max:number) {
    let data={
      center:{
        lat:center.lat,
        lng:center.lng
      },
      bounds:{
        ne:{
          lat:ne.lat,
          lng:ne.lng
        },
        se:{
          lat:sw.lat,
          lng:ne.lng
        },
        sw:{
          lat:sw.lat,
          lng:sw.lng
        },
        nw:{
          lat:ne.lat,
          lng:sw.lng
        }

      },
      max:max
    }
    let data2 = {
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
    console.log(data)
    console.log(data2)
    return this.http.post('https://endpoint-dot-mask-9999.appspot.com/stores', data).pipe(
      // debounceTime(100000)
    )
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