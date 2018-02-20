import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Budget } from '../Budget';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {
  @Input() budget: Budget;
  @Output() onDeleteBudget: EventEmitter<Budget> = new EventEmitter<Budget>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendToBudgetDetails(id: number): void {
    this.router.navigate(['/budgets', id]);
  }

  deleteBudget(budget: Budget) {
    this.onDeleteBudget.emit(budget);
  }
}
