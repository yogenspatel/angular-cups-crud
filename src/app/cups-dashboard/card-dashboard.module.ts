import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CupsDashboardComponent } from './cups-dashboard.component';
import { CupsCardComponent } from '../cups-card/cups-card.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CupsDashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [CupsDashboardComponent, CupsCardComponent, ModalDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CardDashBoardModule { }
