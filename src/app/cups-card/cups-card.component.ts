import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cup } from '../models/cup';
import { cupActionLabel, drinkTypeLabel } from '../dataSets/cup-data';

@Component({
  selector: 'app-cups-card',
  templateUrl: './cups-card.component.html',
  styleUrls: ['./cups-card.component.css']
})
export class CupsCardComponent implements OnInit {

  @Input() cupData: Cup;
  // Event Emitter for cup action changes
  @Output() onCupAction = new EventEmitter();
  // Event emitter for retrieving data on Edit
  @Output() onRetrieveCupData = new EventEmitter();
  // Event emitter for deleting cup on Delete
  @Output() onDeleteCupData = new EventEmitter();
  cupActionLabels: Array<string> = [];
  drinkTypeLabels: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.cupActionLabels = cupActionLabel;
    this.drinkTypeLabels = drinkTypeLabel;
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
