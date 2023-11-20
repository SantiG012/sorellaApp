import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { AbstractGeoLocationService } from '../abstractions/abstract-geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService extends AbstractGeoLocationService {

  private lat: number = 0;
  private long: number = 0;

  constructor(private http: HttpClient) {
    super();
  }

  async printGeolocation(): Promise<string> {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      
      this.lat = coordinates.coords.latitude;
      this.long = coordinates.coords.longitude;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${this.lat}&lon=${this.long}&zoom=18&addressdetails=1`;

      return new Promise<string>((resolve, reject) => {
        this.http.get(url).subscribe((data: any) => {
          if (data.display_name) {
            const address = data.display_name;

            // console.log('Current Address:');
            
            resolve(String(address).substring(0, 50));
          } else {
            reject("No se pudo obtener la dirección");
          }
        });
      });
    } catch (error) {
      console.error('Error getting current location:', error);
      throw new Error("No se pudo obtener la dirección");
    }
  }

}

