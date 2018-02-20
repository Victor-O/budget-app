import { Component, OnInit } from '@angular/core';
import { Budget } from '../Budget';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'ba-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss']
})
export class BudgetDetailsComponent implements OnInit {
  budget: Budget;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private budgetService: BudgetService) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.budgetService.getBudget(id)
      .subscribe(budget => {
          this.budget = budget;
          console.log(this.budget);
        },
        error => this.errorMessage = <any>error);
  }

  saveBudget() {
    this.budgetService.saveBudget(this.budget)
      .subscribe(budget => {
          this.budget = budget;
          console.log(this.budget);
        },
        error => this.errorMessage = <any>error);
  }

  updateTotal() {
    this.budget.total = this.budget.rent + this.budget.utilities + this.budget.subscriptions +
      this.budget.food + this.budget.otherHouseGoods + this.budget.daycare + this.budget.credit +
      this.budget.transport + this.budget.localLanguageLessons;
  }


  sendBackToBudgets() {
    this.router.navigate(['/budgets']);
  }
}
