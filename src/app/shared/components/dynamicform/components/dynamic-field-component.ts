import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'dynamic-field',
  templateUrl: './dynamic-field-component.html',

})
export class DynamicFieldComponent implements OnInit {
  @Input() field: any;
  @Input() group: FormGroup;

  options: any;
  filteredOptions: any;

  multiSelectSelected: any = [];

  multiSelectfiltered: any=[];
  lastFilter: string = '';



  myControl: FormControl = new FormControl();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.group = this.createControl(this.field);

    if (this.field.type === "autocomplete") {
      this.filteredOptions = this.group.controls[this.field.key].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
    else if (this.field.type === "multiautocomplete") {
      this.multiSelectfiltered = this.group.controls[this.field.key].valueChanges.pipe(
        startWith<string | any>(''),
        map(value => typeof value === 'string' ? value : this.lastFilter),
        map(filter => this.filter(filter))
      );
    }

  }
  filter(filter: string): any {
    this.lastFilter = filter;
    if (filter) {
      return this.field.options.filter(option => {
        return option.displayText.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
      })
    } else {
      return this.field.options.slice();
    }
  }

  private _filter(value: any) {
    const filterValue = value;

    return this.field.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  createControl(field: any) {
    if (field.type === "button") return;
    const control = this.fb.control(
      field.value,
      field.required ? [
        Validators.required
      ] : []
    );

    this.group.addControl(field.key, control);

    return this.group;
  }

  displayFn(option): string {
    return option;
  }

  displaymultiFn(value): string | undefined {
    let displayValue: string;
    if (Array.isArray(value)) {
      value.forEach((arr, index) => {
        if (index === 0) {
          displayValue = arr.displayText;
        } else {
          displayValue += ', ' + arr.displayText;
        }
      });
    } else {
      displayValue = value;
    }
    return displayValue;
  }

  selectedclient(event) {
    console.log(event.option.value);

  }
  optionClicked(event: Event, arr: any) {
    event.stopPropagation();
    this.toggleSelection(arr);
  }

  toggleSelection(arr: any) {
    arr.selected = !arr.selected;
    if (arr.selected) {
      this.multiSelectSelected.push(arr);
    } else {
      const i = this.multiSelectSelected.findIndex(value => value.Id === arr.Id);
      this.multiSelectSelected.splice(i, 1);
    }

    this.group.controls[this.field.key].setValue(this.multiSelectSelected);
  }

}
