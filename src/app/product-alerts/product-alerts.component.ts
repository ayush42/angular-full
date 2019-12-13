import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product_in_alert ;
  @Output() notify_in_alert = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  notifyParent(){
    this.notify_in_alert.emit() ;
  }

}