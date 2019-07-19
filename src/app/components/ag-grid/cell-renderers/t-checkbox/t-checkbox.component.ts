import { Component } from '@angular/core';

@Component({
  selector: 't-checkbox',
  templateUrl: './t-checkbox.component.html',
  styleUrls: ['./t-checkbox.component.scss']
})
export class TCheckboxComponent {
  private node: any;

  agInit(params: any): void {
    this.node = params.node;
  }

  toggleCheck(event: any) {
    this.node.setSelected(!this.checked);

    event.preventDefault();
    event.stopPropagation();
  }

  get checked(): boolean {
      return this.node ? this.node.isSelected() : false;
  }
}
