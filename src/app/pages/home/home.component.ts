import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';
import { Hit } from '../../interfaces/pixabay.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Hit[] = [];
  cargando: boolean = false;
  constructor( private _pixabay: PixabayService ) { }

  ngOnInit(): void {
    this._pixabay.getDefault().subscribe(
      ( data )=>{
        this.results = data;
      });
  }

  buscar( query:string ){
    this.results = [];
    this.cargando = true;
    
    this._pixabay.getBuscar( query ).subscribe(
      ( data )=>{
        this.results = data;
        this.cargando= false;        
      });
  }

}
