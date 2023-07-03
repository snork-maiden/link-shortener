import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() isPassword: boolean = false;
  @Input() id: string = '';
  // @Input() value: any;
  // value: EventEmitter<string> = new EventEmitter<string>();
  @Output() value = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  inputValue: any;

  emitValue(newValue: string) {
    this.value.emit(newValue);
  }
}
