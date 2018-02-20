import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Budget } from '../Budget';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ba-add-budget-dialog',
  templateUrl: './add-budget-dialog.component.html',
  styleUrls: ['./add-budget-dialog.component.scss']
})
export class AddBudgetDialogComponent implements OnInit {
  receivedData: any;
  budget: Budget;
  budgetForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddBudgetDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.receivedData = this.data;
    this.budget = new Budget(0, '', '', '', 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0);
    this.budgetForm = this.formBuilder.group({
      city: ['', Validators.required],
      country: [''],
      imageUrl: [''],
      rent: [0, Validators.min(0)],
      utilities: [0, Validators.min(0)],
      subscriptions: [0, Validators.min(0)],
      food: [0, Validators.min(0)],
      otherHouseGoods: [0, Validators.min(0)],
      daycare: [0, Validators.min(0)],
      credit: [0, Validators.min(0)],
      transport: [0, Validators.min(0)],
      localLanguageLessons: [0, Validators.min(0)],
    });

    this.budgetForm.valueChanges
      .subscribe( form => this.updateTotal());
  }

  updateTotal() {
    this.budget.total = this.budget.rent + this.budget.utilities + this.budget.subscriptions +
      this.budget.food + this.budget.otherHouseGoods + this.budget.daycare + this.budget.credit +
      this.budget.transport + this.budget.localLanguageLessons;
  }

  onCloseDialog(): void {
    this.dialogRef.close('Pizza');
  }

  onSave(): void {
    this.dialogRef.close(this.budget);
  }

}
