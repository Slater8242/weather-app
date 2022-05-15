import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-weather',
  templateUrl: './data-weather.component.html',
  styleUrls: ['./data-weather.component.css']
})
export class DataWeatherComponent implements OnInit,OnChanges {
  private api_base:string = "https://api.weatherbit.io/v2.0/";
  private api_key:string = "key=6ca7dcac211346a1ae03e110c4c973c1";
  private api_key2:string = "key=bb240c94921f437ab1bf88e3fde4184c";

  @Output() datas = new EventEmitter<{dataWeather:{}}>();
  @Input() cityName:string;

  constructor(private http:HttpClient) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cityName.currentValue !==undefined) { 
      this.getWeather(this.cityName);
    }
      
  }
  ngOnInit(): void {
    this.getIp();
  }

  getIp(){
    this.http.get<any>("https://ipinfo.io/json?token=e000eea0006ac7")
    .subscribe(res=>{
      this.getWeather(res.city)
    })
  }

  getWeather(city:string){
    this.http.get<any>(`${this.api_base}current?city=${city}&${this.api_key2}&lang=en`)
    .subscribe(res=>{
        this.datas.emit(res.data) ;
      });     
  }
  
}
