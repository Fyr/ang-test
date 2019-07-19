import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 't-link',
  templateUrl: './t-link.component.html',
  styleUrls: ['./t-link.component.scss']
})
export class TLinkComponent {
  url: string;
  title: string;

  agInit(params: any): void {
    if (params != null) {
      if (params.data && params.data.id) {
        this.url = ApiService.getVideoUrl(params.data.id);
      }
      if (params.value) {
        this.title = params.value;
      }
    }
  }
}
