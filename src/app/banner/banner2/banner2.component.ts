import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss']
})
export class Banner2Component implements OnInit {
  @Input() data: any;

  imgUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.data.imageUrl;
  }
}
