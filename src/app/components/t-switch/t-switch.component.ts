import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-switch',
  templateUrl: './t-switch.component.html',
  styleUrls: ['./t-switch.component.scss']
})
export class TSwitchComponent {
  isOn = false;
  @Output() change = new EventEmitter<boolean>();

  onChange(event) {
    this.isOn = !this.isOn;
    this.change.emit(this.isOn);
    event.stopPropagation();
  }

  get text(): string {
    return this.isOn ? 'On' : 'Off';
  }
}
