import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OktaUser } from '../models/OktaUser';


@Injectable({
	providedIn: 'root'
})
export class OktaApiServiceService {

	constructor(
		private httpClient: HttpClient
	) { }

	public $User(oktaId: string): Observable<OktaUser | null> {
		//return this.httpClient.get(`/api/user/${oktaId}`);

		return of({ oktaId : oktaId, firstName: "vasile" });
	}

}
