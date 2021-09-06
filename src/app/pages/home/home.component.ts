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
  constructor( public _pixabay: PixabayService ) { }

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

  cargarMas(){

    if( this._pixabay.pagina >= this._pixabay.totalPaginas  ){
      console.warn('Se acabaron');
      return;
    }
    

    this._pixabay.cargarMas()
      .subscribe( data =>{
        this.results.push( ...data );
      })
  }

}
