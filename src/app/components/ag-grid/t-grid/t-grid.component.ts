import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { TableItemModel } from '../../../models/table-item.model';
import { ApiService } from '../../../services/api.service';
import { TBarComponent } from '../t-bar/t-bar.component';

import { selectionColumnDef } from '../column-defs/selection-column-def';
import { imageColumnDef } from '../column-defs/image-column-def';
import { publishedAtColumnDef } from '../column-defs/published-at-column-def';
import { titleColumnDef } from '../column-defs/title-column-def';
import { descriptionColumnDef } from '../column-defs/description-column-def';

@Component({
  selector: 't-grid',
  templateUrl: './t-grid.component.html',
  styleUrls: ['./t-grid.component.scss']
})
export class TGridComponent implements OnInit {
  tableItems: Array<TableItemModel>;
  rowHeight = 84;

  columnDefs = [
      selectionColumnDef,
      { ...imageColumnDef, ...{ width: 150, cellRendererParams: { height: this.rowHeight, width: 150 } } },
      publishedAtColumnDef,
      titleColumnDef,
      descriptionColumnDef
  ];

  sideBar = {
    defaultToolPanel: 'selectionPanel',
      toolPanels: [
      {
        id: 'selectionPanel',
        labelDefault: 'Toolbar',
        toolPanelFramework: TBarComponent
      }
    ]
  };

  constructor(private apiService: ApiService) { }

  getContextMenuItems = (params) => {
    console.log(this);
    return [
      'copy',
      'copyWithHeaders',
      'paste',
      'separator',
      {
        name: 'Open in new tab',
        action() {
          window.open(ApiService.getVideoUrl(params.node.data.id));
        }
      }
    ];
  }

  ngOnInit() {
    this.apiService.getVideoItems('john').subscribe(tableItems => this.tableItems = tableItems);
  }

}
