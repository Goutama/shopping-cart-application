import { ReceipesService } from './receipes.service';
import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.sass']
})
export class ReceipesComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

}
