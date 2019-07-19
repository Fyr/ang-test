import { Component } from '@angular/core';

@Component({
  selector: 't-date',
  templateUrl: './t-date.component.html',
  styleUrls: ['./t-date.component.scss']
})
export class TDateComponent {
  date: string;

  agInit(params: any): void {
    if (params != null && params.value) {
      this.date = new Date(params.value).toLocaleDateString();
    }
  }

}
