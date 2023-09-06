import { Component } from '@angular/core';
import { OktaApiServiceService } from '../services/okta-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, first, map, switchMap, tap } from 'rxjs';
import { OktaUser } from '../models/OktaUser';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  public $user : Observable<OktaUser | null>;

  constructor(
    private oktaApi: OktaApiServiceService,
    private route: ActivatedRoute
  ) {
    this.$user = this.route.paramMap
    .pipe(
      tap(console.log),
      map(e => e.get("id") || ""),
      switchMap(e => this.oktaApi.$User(e))
    );

    //this.$user.pipe(first()).subscribe(e => console.log(e));
 
  }

}
