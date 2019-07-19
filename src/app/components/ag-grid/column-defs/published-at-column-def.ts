import { TDateComponent } from '../cell-renderers/t-date/t-date.component';

const publishedAtColumnDef = {
    headerName: 'Published on',
    width: 120,
    field: 'publishedAt',
    cellRendererFramework: TDateComponent,
    sortable: true
};

export { publishedAtColumnDef };
