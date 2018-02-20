import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetItemComponent } from './budget-item/budget-item.component';
import { RouterModule } from '@angular/router';
import { BudgetService } from './budget.service';
import { HttpClientModule } from '@angular/common/http';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { AddBudgetDialogComponent } from './add-budget-dialog/add-budget-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: 'budgets', component: BudgetListComponent },
      { path: 'budgets/:id', component: BudgetDetailsComponent }
    ]),
    HttpClientModule
  ],
  declarations: [BudgetListComponent, BudgetItemComponent, BudgetDetailsComponent, AddBudgetDialogComponent],
  providers: [BudgetService],
  exports: [BudgetListComponent],
  entryComponents: [AddBudgetDialogComponent]
})
export class BudgetsModule {
}
