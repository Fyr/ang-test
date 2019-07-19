import { TCheckboxComponent } from '../cell-renderers/t-checkbox/t-checkbox.component';
import { THeaderCheckboxComponent } from '../cell-renderers/t-checkbox/t-header-checkbox.component';

const selectionColumnDef = {
    headerName: '',
    width: 50,
    cellClass: 'grid-checkbox',
    cellRendererFramework: TCheckboxComponent,
    hide: true,
    headerComponentFramework: THeaderCheckboxComponent
};

export { selectionColumnDef };
