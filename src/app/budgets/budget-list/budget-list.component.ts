import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../Budget';
import { MatDialog } from '@angular/material';
import { AddBudgetDialogComponent } from '../add-budget-dialog/add-budget-dialog.component';

@Component({
  selector: 'ba-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[];
  errorMessage: string;

  constructor(private budgetService: BudgetService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.budgetService.getBudgets()
      .subscribe(budgets => this.budgets = budgets,
        error => this.errorMessage = <any>error);
  }

  deleteBudget(budget: Budget): void {
    this.budgetService.deleteBudget(budget)
      .subscribe(budgets => this.budgets = budgets,
        error => this.errorMessage = <any>error);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddBudgetDialogComponent, {
      data: { title: 'Create a new budget' }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result instanceof Budget) {
          this.budgetService.saveNewBudget(result)
            .subscribe(budgets => this.budgets = budgets,
            error => this.errorMessage = <any>error);
        }
      });
  }
}
