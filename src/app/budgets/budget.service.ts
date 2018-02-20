import { Injectable } from '@angular/core';
import { Budget } from './Budget';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class BudgetService {
  private backendUrl = 'http://localhost:5000';


  constructor(private http: HttpClient) {
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.backendUrl}/budgets`)
      .catch(this.handleError);
  }

  getBudget(id: number): Observable<Budget> {
    return this.http.post<Budget>(`${this.backendUrl}/budget`, { id: id })
      .catch(this.handleError);
  }

  saveNewBudget(budget: Budget): Observable<Budget[]> {
    return this.http.post(`${this.backendUrl}/budgets`, budget)
      .catch(this.handleError);
  }

  saveBudget(budget: Budget): Observable<Budget> {
    return this.http.put(`${this.backendUrl}/budgets/${budget.id}`, budget)
      .catch(this.handleError);
  }

  deleteBudget(budget: Budget): Observable<Budget[]> {
    return this.http.delete(`${this.backendUrl}/budgets/${budget.id}`)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }
}
