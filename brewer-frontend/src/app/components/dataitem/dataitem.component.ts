import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dataitem',
  templateUrl: './dataitem.component.html',
  styleUrls: ['./dataitem.component.css']
})
export class DataitemComponent implements OnInit {

  @Input('value') value: number;
  @Input('src') imagesrc: string;
  @Input('text') text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
