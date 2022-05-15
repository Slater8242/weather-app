import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {
  private api_base:string = "https://api.weatherbit.io/v2.0/";
  private api_key:string = "key=6ca7dcac211346a1ae03e110c4c973c1";
  private api_key2:string = "key=bb240c94921f437ab1bf88e3fde4184c";
  @ViewChild("cityNameInput",{static:true}) cityNameInput:ElementRef;
  datas:[]
  

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getIp();
  }

  getIp(){
    this.http.get<any>("https://ipinfo.io/json?token=e000eea0006ac7")
    .subscribe(res=>{
      this.getWeather(res.city)
    })
  }

  getCity(city:{cityName:string}){
    this.getWeather(city.cityName)
  }

  getWeather(city){
    this.http.get<any>(`${this.api_base}current?city=${city}&${this.api_key2}&lang=ru`)
    .subscribe(res=>{
        this.datas = res.data;
      }); 
  }
  
  
}
