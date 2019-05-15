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
  myControl: FormControl = new FormControl();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.group = this.createControl(this.field);
    
    if(this.field.type==="autocomplete"){
      this.filteredOptions = this.group.controls[this.field.key].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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
      field.required? [
        Validators.required
      ]:[]
    );

    this.group.addControl(field.key, control);

    return this.group;
  }

  displayFn(option): string {
    return option;
  }
  selectedclient(event) {
    console.log(event.option.value);

  }

}
