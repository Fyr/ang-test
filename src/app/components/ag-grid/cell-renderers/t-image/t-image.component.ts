import { Component } from '@angular/core';

@Component({
  selector: 't-image',
  templateUrl: './t-image.component.html',
  styleUrls: ['./t-image.component.scss']
})
export class TImageComponent {
  url: string;
  width = 70;
  height = 45;

  agInit(params: any): void {
    if (params != null) {
      if (params.value) { this.url = params.value; }
      if (params.width) { this.width = params.width; }
      if (params.height) { this.height = params.height; }
    }
  }
}
