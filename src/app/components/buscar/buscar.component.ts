import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @ViewChild('inputBox') inputBox!: ElementRef<HTMLInputElement>;

  @Output() onQuery: EventEmitter<string> = new EventEmitter;

  get bgHero(): string{
    return "linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3) ), url('https://www.10wallpaper.com/wallpaper/1920x1200/1202/emerald_lake-Canada_travel_landscape_photography_wallpaper_1920x1200.jpg')";
  }

  constructor() { }

  ngOnInit(): void {

  }

  buscar( ){

    if( (this.inputBox.nativeElement.value).trim() === '' ){
      return;
    }
    
    this.onQuery.emit( this.inputBox.nativeElement.value  );
  }
  

}
