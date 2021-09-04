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
    const params = new HttpParams()
    .set('key', this.API_KEY)
    .set( 'image_type', this.tipo )
    .set( 'lang', this.idioma )
    .set( 'q', query )
    .set( 'page', 1 );


    return this.http.get<PixabayAPIResponse>( this.url, { params } )
    .pipe(
      map( (resp ) => resp.hits )
    );

  }



}
