import { TImageComponent } from '../cell-renderers/t-image/t-image.component';

const imageColumnDef = {
    headerName: '',
    field: 'imageUrl',
    cellClass: 'video-image',
    cellRendererFramework: TImageComponent,
    cellStyle: { padding: '0' } };

export { imageColumnDef };
