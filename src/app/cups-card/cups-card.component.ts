import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cup } from '../models/cup';

@Component({
  selector: 'app-cups-card',
  templateUrl: './cups-card.component.html',
  styleUrls: ['./cups-card.component.css']
})
export class CupsCardComponent implements OnInit {

  @Input() cupData: Cup;
  @Output() onCupAction = new EventEmitter();
  @Output() onRetrieveCupData = new EventEmitter();
  @Output() onDeleteCupData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  onCupActionChange(val, cupData:Cup) {
    this.onCupAction.emit({val, cupData});
  }
  retriveCupDataOnEdit(cupData:Cup) {
    this.onRetrieveCupData.emit(cupData);
  }
  deleteCupData(cupData:Cup) {
    this.onDeleteCupData.emit(cupData);
  }

}
