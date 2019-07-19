import { Component } from '@angular/core';

@Component({
  selector: 't-bar',
  templateUrl: './t-bar.component.html',
  styleUrls: ['./t-bar.component.scss']
})
export class TBarComponent {
  selectedRowsCount = 0;
  totalRowsCount = 0;
  gridApi: any;

  agInit(params: any): void {
    this.gridApi = params.api;
    this.gridApi.addEventListener('modelUpdated', (p) => this.updateStat(p));
    this.gridApi.addEventListener('selectionChanged', (p) => this.updateStat(p));
  }

  updateStat(params) {
    this.selectedRowsCount = params.api.getSelectedNodes().length;
    this.totalRowsCount = params.api.getModel().getRowCount();
  }

  toogleSelectionMode(isOn) {
    this.gridApi.deselectAll();
    this.gridApi.columnController.columnApi.setColumnVisible('0', isOn);
  }

}
