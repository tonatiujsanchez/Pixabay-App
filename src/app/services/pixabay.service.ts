import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { PixabayAPIResponse } from '../interfaces/pixabay.interface';
@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  
  // https://pixabay.com/api/?key=6943577-563a2025145473f4ad28c7a9c&image_type=photo&lang=es
  
  url:string = 'https://pixabay.com/api/';
  private API_KEY = '6943577-563a2025145473f4ad28c7a9c';
  tipo: string = 'photo';
  idioma: string = 'es';
  query: string = '';
  pagina: number = 1;

  totalPaginas: number = 1;

  

  constructor( private http: HttpClient ) {  }


  getDefault(){
    const params = new HttpParams()
      .set('key', this.API_KEY)
      .set( 'image_type', this.tipo )
      .set( 'lang', this.idioma );

    return this.http.get<PixabayAPIResponse>( this.url, { params } )
      .pipe(
        map( (resp ) => resp.hits )
      );
  }

  getBuscar( query:string ){


    this.query = query;

    const params = new HttpParams()
    .set('key', this.API_KEY)
    .set( 'image_type', this.tipo )
    .set( 'lang', this.idioma )
    .set( 'q', this.query )
    .set( 'page', 1 );


    return this.http.get<PixabayAPIResponse>( this.url, { params } )
    .pipe(
      tap( resp =>{
        this.totalPaginas = Math.ceil( resp.totalHits / 20 );
      }),
      map( (resp ) => resp.hits )
    );

  }

  cargarMas(){
    
    this.pagina++;

    const params = new HttpParams()
    .set('key', this.API_KEY)
    .set( 'image_type', this.tipo )
    .set( 'lang', this.idioma )
    .set( 'q', this.query )
    .set( 'page', this.pagina );


    return this.http.get<PixabayAPIResponse>( this.url, { params } )
    .pipe(
      map( (resp ) => resp.hits )
    );
  }



}
