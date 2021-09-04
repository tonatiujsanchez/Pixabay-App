import { Component, Input, OnInit } from '@angular/core';
import { Hit } from '../../interfaces/pixabay.interface';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.css']
})
export class ListadoImagenesComponent implements OnInit {
  
  @Input() imagenes: Hit[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
