import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {



  @Input() data:any = [];
  @Output() item = new EventEmitter();
  input = false;
  amount:number =1;
  valid :string = 'pleaser enter a valid value';
  failed = false;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.amount > 0) {
      this.item.emit({item:this.data, quantity: this.amount});
      this.input = !this.input;
      this.failed = false;
    } else {
      this.failed = true;
    }
  }
}
