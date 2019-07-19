import { TestBed, async } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TGridComponent } from './components/ag-grid/t-grid/t-grid.component';
import { TPageComponent } from './components/t-page/t-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TGridComponent,
        TPageComponent
      ],
      imports: [
        HttpClientModule,
        AgGridModule.withComponents([])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
