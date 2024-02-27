import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingBehaviorSubject = new BehaviorSubject<boolean>(false);
  loadingAction$ = this.loadingBehaviorSubject.asObservable();

  showLoader() {
    this.loadingBehaviorSubject.next(true);
  }

  hideLoader() {
    this.loadingBehaviorSubject.next(false);
  }
}
