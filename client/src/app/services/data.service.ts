import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ApiService } from "./api.service";
import { Baby, BabiesResponse } from "./../models";
import { LoaderService } from "./";

@Injectable({
	providedIn: "root",
})
export class DataService {
	private babiesSubject = new BehaviorSubject<Baby[]>([]);
	public babies$ = this.babiesSubject.asObservable();

	constructor(
		private apiService: ApiService,
		private loaderService: LoaderService,
	) {
		this.fetchBabies();
	}

	fetchBabies(): void {
		this.loaderService.showLoader();
		this.apiService
			.get<BabiesResponse>("babies")
			.pipe(
				tap((response) => {
					if (response.success && response.data) {
						const babiesData = Array.isArray(response.data)
							? response.data
							: [response.data];
						this.babiesSubject.next(babiesData);
						this.loaderService.hideLoader();
					} else {
						console.error("Failed to fetch babies:", response.message);
					}
				}),
				catchError((error) => {
					console.error("Error fetching babies", error);
					return throwError(() => new Error("Error fetching babies"));
				}),
			)
			.subscribe();
	}

  getBaby(babyId: string): Observable<BabiesResponse> {
    this.loaderService.showLoader();
    return this.apiService.get<BabiesResponse>(`babies/${babyId}`).pipe(
      catchError((error) => {
        console.error(`Error fetching baby with ID ${babyId}:`, error);
        this.loaderService.hideLoader();
        return throwError(() => new Error(`Error fetching baby with ID ${babyId}`));
      }),
      tap((baby) => {
        if (baby) {
          this.loaderService.hideLoader();
          return of(baby);
        }
          return throwError(() => new Error(`Baby with ID ${babyId} not found`));
      })
    );
  }


  createBaby(baby: Baby): Observable<BabiesResponse> {
    this.loaderService.showLoader();
    return this.apiService.post<BabiesResponse>('babies', baby).pipe(
      catchError((error) => {
        console.error('Error creating baby', error);
        this.loaderService.hideLoader();
        return throwError(() => new Error('Error creating baby'));
      }),
      tap((response) => {
        this.loaderService.hideLoader();
        if (response.success && response.data) {
          const newData = Array.isArray(response.data) ? response.data : [response.data];
          const filteredData = newData.filter((item): item is Baby => item !== undefined);
          this.babiesSubject.next([...this.babiesSubject.value, ...filteredData]);
        } else {
          console.error('Failed to create/update baby:', response.message);
        }
      }),
    );
  }


	updateBaby(baby: Baby): Observable<BabiesResponse> {
		return this.apiService.put<BabiesResponse>(`babies/${baby._id}`, baby).pipe(
			catchError((error) => {
				console.error("Error updating baby", error);
				return throwError(() => new Error("Error updating baby"));
			}),
			tap((response) => {
				if (
					response.success &&
					response.data &&
					!Array.isArray(response.data)
				) {
					const updatedBaby = response.data;
					const updatedBabies = this.babiesSubject.value.map((b) =>
						b._id === updatedBaby._id ? updatedBaby : b,
					);
					this.babiesSubject.next(updatedBabies);
				} else {
					console.error("Failed to update baby:", response.message);
				}
			}),
		);
	}

	deleteBaby(babyId: string): void {
		this.apiService
			.delete<BabiesResponse>(`babies/${babyId}`)
			.pipe(
				catchError((error) => {
					console.error("Error deleting baby", error);
					return throwError(() => new Error("Error deleting baby"));
				}),
				tap((response) => {
					if (response.success) {
						const updatedBabies = this.babiesSubject.value.filter(
							(b) => b._id !== babyId.toString(),
						);
						this.babiesSubject.next(updatedBabies);
					} else {
						console.error("Failed to delete baby:", response.message);
					}
				}),
			)
			.subscribe();
	}
}
