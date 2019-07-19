import { TLinkComponent } from '../cell-renderers/t-link/t-link.component';

const titleColumnDef = {
    headerName: 'Video Title',
    width: 315,
    field: 'title',
    cellRendererFramework: TLinkComponent,
    sortable: true,
    cellStyle: { 'white-space': 'normal', 'line-height': '20px' }
};

export { titleColumnDef };
