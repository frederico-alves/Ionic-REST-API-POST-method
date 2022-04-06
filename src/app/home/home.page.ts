import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public zones =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

  zoneGroup: any;
  temperatureGroup: any;
  airQualityGroup: any;
  humidityGroup: any;

  // zone: number = 1;
  // Temperature: number = 1;
  // Humidity: number = 1;
  // AirQuality: number = 1;

  constructor(public http: HttpClient) {
  }
  ngOnInit(){
  }



  consoleLogData() {
    console.log('Zone: ', this.zoneGroup);
    console.log('Temperature: ', this.temperatureGroup);
    console.log('Air Quality: ', this.airQualityGroup);
    console.log('Humidity: ', this.humidityGroup);
    let YourHeaders = {'Content-Type':'application/json'};
    // let zone = this.zone;
    // let Temperature = this.Temperature;
    // let Humidity = this.Humidity;
    // let AirQuality = this.AirQuality;
    let zone = this.zoneGroup;
    let Temperature = this.temperatureGroup;
    let Humidity = this.humidityGroup;
    let AirQuality = this.airQualityGroup;

    zone = parseInt(zone);
    Temperature = parseInt(Temperature);
    Humidity = parseInt(Humidity);
    AirQuality = parseInt(AirQuality);

    let postData = {
            // zone,
            // Temperature,
            // Humidity,
            // AirQuality
            zone,
            Temperature,
            Humidity,
            AirQuality
    }

    console.log(postData);
  }

  sendPostRequest() {
    let YourHeaders = {'Content-Type':'application/json'};
    // let zone = this.zone;
    // let Temperature = this.Temperature;
    // let Humidity = this.Humidity;
    // let AirQuality = this.AirQuality;
    let zone = this.zoneGroup;
    let Temperature = this.temperatureGroup;
    let Humidity = this.humidityGroup;
    let AirQuality = this.airQualityGroup;

    zone = parseInt(zone);
    Temperature = parseInt(Temperature);
    Humidity = parseInt(Humidity);
    AirQuality = parseInt(AirQuality);

    let postData = {
            // zone,
            // Temperature,
            // Humidity,
            // AirQuality
            zone,
            Temperature,
            Humidity,
            AirQuality
    }

    console.log(postData);

    this.http.post('https://mentals-shower.herokuapp.com', postData, {headers: YourHeaders})
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }
}
