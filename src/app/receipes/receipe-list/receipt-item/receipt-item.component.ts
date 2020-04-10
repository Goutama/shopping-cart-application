import { ReceipesService } from './../../receipes.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipt-item',
  templateUrl: './receipt-item.component.html',
  styleUrls: ['./receipt-item.component.sass']
})
export class ReceiptItemComponent implements OnInit {
  @Input() receipe: Receipe;
  @Input() index: number;

  constructor(private receipesService: ReceipesService ) { }

  ngOnInit() {
  }
}
