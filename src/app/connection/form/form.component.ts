import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() city = new EventEmitter<{cityName:string}>()
  cityName:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onCityName(event:any){
    this.cityName = (<HTMLInputElement>event.target).value;
  }

  onSubmit(){
    this.city.emit({
      cityName: this.cityName
    })  
  }

}
