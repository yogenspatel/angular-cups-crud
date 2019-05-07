import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CupsService } from '../services/cup.service';
import { ModalService } from '../services/modal.service';
import { Cup } from '../models/cup';

@Component({
  selector: 'app-cups-dashboard',
  templateUrl: './cups-dashboard.component.html',
  styleUrls: ['./cups-dashboard.component.css']
})
export class CupsDashboardComponent implements OnInit {
  addForm: FormGroup;
  editForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl: string;
  error: string = '';
  cupsData: Cup[] = [];
  cupName: string = '';
  edit: boolean = false;
  currentCupData: Cup = null;
  editId: number = 0;

  @ViewChild("cupName") cupNameField: ElementRef;
  @ViewChild("cupName") cupEditName: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private cupsService: CupsService,
    private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open(id);
    this.cupNameField.nativeElement.focus();
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.addForm.reset();
    this.edit = false;
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      cupName: ['', Validators.required],
      cupType: ['', Validators.required]
    });
    this.editForm = this.formBuilder.group({
      cupEditName: ['', Validators.required],
      cupType: ['', Validators.required],
      cupAction: []
    });
    this.cupsData = this.cupsService.getAllCupsData();
  }
  
  // convenience getter for easy access to form fields
  get formAddFields() { return this.addForm.controls; }
  get formEditFields() { return this.editForm.controls; }
  onAddSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;
    this.cupsService.addCup({
      name: this.formAddFields.cupName.value,
      type: this.formAddFields.cupType.value,
      action: '1'
    }).subscribe(() => {
      this.loading = false;
      this.cupsData = this.cupsService.getAllCupsData();
      this.closeModal('add-cup-modal');
    });
  }

  onEditSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;
    this.cupsService.editCup({
      name: this.formEditFields.cupEditName.value,
      type: this.formEditFields.cupType.value,
      action: this.formEditFields.cupAction.value,
      id: this.editId
    }).subscribe(() => {
      this.loading = false;
      this.cupsData = this.cupsService.getAllCupsData();
      this.closeModal('edit-cup-modal');
    });
  }
  retriveCupDataOnForm(cupData:Cup) {
    this.edit = true;
    this.currentCupData = cupData;
    this.openModal('edit-cup-modal');
    this.cupEditName.nativeElement.focus();
    this.editId = cupData.id;
    this.editForm.controls['cupEditName'].setValue(cupData.name);
    this.editForm.controls['cupType'].setValue(cupData.type);
    this.editForm.controls['cupAction'].setValue(cupData.action);
    // this.cupsService.editCup(cupData);
    console.log('Edit Cup Data Called: ', cupData);
  }
}
