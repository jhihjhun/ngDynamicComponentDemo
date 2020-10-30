import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.scss']
})
export class Banner1Component implements OnInit {

  @Input() data: any;
  @Output() banner1PageChangeEmit = new EventEmitter();
  cars: any[];
  responsiveOptions: any;

  constructor() {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.cars = this.data.cars;
  }

  public banner1PageChange($event: any): void {

    // 發送事件
    this.banner1PageChangeEmit.emit($event);
  }
}
