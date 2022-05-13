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
  @ViewChild("cityNameInput",{static:true}) cityNameInput:ElementRef;
  datas:[]
  cityName:string = "";
  ipData:any;

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getIp(); 
    // this.getData();
  }

  getData(){
    
  }

  getIp(){
    this.http.get<any>("https://ipinfo.io/json?token=e000eea0006ac7")
    .subscribe(res=>{
      console.log(res);
      this.http.get<any>(`${this.api_base}current?city=${res.city}&${this.api_key}&lang=ru`)
    .subscribe(res=>{
        this.datas = res.data;
      });
      this.ipData = res;
    })
  }
  
  onCityName(event:any){
    this.cityName = (<HTMLInputElement>event.target).value;
    // this.http.get<any>(`${this.api_base}current?city=${this.cityName}&${this.api_key}&lang=ru`)
    // .subscribe(res=>{
    //     this.datas = res.data;
    //   });
  }

  onSubmit(f:NgForm){  
    this.http.get<any>(`${this.api_base}current?city=${this.cityName}&${this.api_key}&lang=ru`)
    .subscribe(res=>{
        this.datas = res.data;
      }); 
  }

}
