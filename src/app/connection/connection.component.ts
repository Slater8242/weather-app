import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {  
  datas:[];
  city:string;

  constructor() {}
  ngOnInit(): void {}

  getData(data:any){
    this.datas = data;
  }

  getCity(city:{cityName:string}){
    this.city = city.cityName;
  }
}
