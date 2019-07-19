import { Component } from '@angular/core';

@Component({
  selector: 't-header-checkbox',
  templateUrl: './t-checkbox.component.html',
  styleUrls: ['./t-checkbox.component.scss']
})
export class THeaderCheckboxComponent {
  private gridApi: any;

  agInit(params: any): void {
    this.gridApi = params.api;
  }

  toggleCheck(event: any) {
    if (!this.checked) {
        this.gridApi.selectAll();
    } else {
        this.gridApi.deselectAll();
    }

    event.preventDefault();
    event.stopPropagation();
  }

  get checked(): boolean {
      return this.gridApi.getModel().getRowCount() === this.gridApi.getSelectedNodes().length;
  }
}
