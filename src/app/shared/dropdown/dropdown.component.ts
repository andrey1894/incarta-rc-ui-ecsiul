import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { IDropdownValue } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropdownComponent,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor, OnChanges {
  @Input() value = 0;
  @Input() dropdownValues: IDropdownValue[] = [];
  @Input() order?: 'ASC' | 'DESC';

  selectedValue = 0;
  touched = false;
  disabled = false;

  readonly dropdownValues$ = new BehaviorSubject<IDropdownValue[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dropdownValues'] || changes['order']) {
      this.setValues();
    }
  }

  onChange = (quantity: any) => {};

  onTouched = () => {};

  change() {
    this.selectedValue = +this.selectedValue;
    this.markAsTouched();
    this.onChange(this.selectedValue);
  }

  writeValue(quantity: number) {
    this.selectedValue = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  private setValues(): void {
    let dropdownValues = [...this.dropdownValues];
    if (this.order) {
      dropdownValues = dropdownValues.sort((v1, v2) => {
        const a: number = v1.orderValue ?? v1.value;
        const b: number = v2.orderValue ?? v2.value;
        return this.order === 'ASC' ? a - b : b - a;
      });
    }

    this.dropdownValues$.next(dropdownValues);
  }
}
