import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import { MenuItem, } from 'primeng/api';
import { Observable, filter, map, startWith } from 'rxjs';
import { AppsListsService } from '../../services/apps-lists.service';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

    
    appList!: any[];
    
    dialogSearchInput = new FormControl('');
    dialogVisible: boolean = false;
    dialogShow = () => this.dialogVisible = true;
    dialogHide = () => this.dialogVisible = false;

    menuItems: MenuItem[] | undefined;
    menuHome: MenuItem | undefined;

    $items = new Observable<any[]>();
    public isAuthenticated$: Observable<boolean>;
    public oktaAuthState$!: Observable<AuthState>;

    constructor(
        private appsListService: AppsListsService,
        private oktaStateService: OktaAuthStateService,
        @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    ) {

        this.appList = appsListService.apps;

        this.$items = this.dialogSearchInput.valueChanges.pipe(
            startWith(""),
            map(e => this.appsListService.createResultsFromSearchQuery(e))
        );

        this.isAuthenticated$ = this.oktaStateService.authState$.pipe(
            filter((s: AuthState) => !!s),
            map((s: AuthState) => s.isAuthenticated ?? false)
        );

        this.oktaAuthState$ = this.oktaStateService.authState$.pipe(
            filter((authState: AuthState) => !!authState && !!authState.isAuthenticated)
        );
    }

    ngOnInit(): void {
        this.menuItems = [{ label: 'Dashboards', routerLink: "/dashboards" }, { label: 'Dashboard1' }];
        this.menuHome = { icon: 'pi pi-home', routerLink: '/' };
    }


    public async signIn(): Promise<void> {
        await this.oktaAuth.signInWithRedirect();
    }

    public async signOut(): Promise<void> {
        await this.oktaAuth.signOut();
    }
}
