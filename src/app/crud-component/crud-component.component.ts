import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-crud-component',
  templateUrl: './crud-component.component.html',
  styleUrls: ['./crud-component.component.css']
})
export class CrudComponentComponent implements OnInit {

  items: Array<string>;
  newItemValue: string;
  @Input() type: string;

  constructor() {
    this.items = ['test']
  }

  ngOnInit() { }

  add() {
    if(this.newItemValue) {
      this.items.push(this.newItemValue);
    }
    this.newItemValue = "";
    console.log('New Array', this.items);
  }

  delete(index) {
    this.items.splice(index, 1);
  }
}

