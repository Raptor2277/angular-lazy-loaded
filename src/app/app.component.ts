import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem, TreeNode } from 'primeng/api';
import { BehaviorSubject, Observable, map, startWith } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'angular-lazy-loaded';

	searchInput = new FormControl('');

	visible: boolean = false;

	showDialog() {
		this.visible = true;
	}

	hideDialog(){
		this.visible = false;
	}

	items = [
		{ name: "Okta Users", shortDescription: "Use Okta to look up users", url: "/identity-services/user/45" },
		{ name: "Okta Groups", shortDescription: "Use Okta to look up groups", url: "/identity-services/group/45" },
		{ name: "App Home", shortDescription: "Home page of app", url: "/" },
	]


	items2: MenuItem[] | undefined;

    home: MenuItem | undefined;

	$items = new Observable<any[]>();

	constructor() {
		this.$items = this.searchInput.valueChanges.pipe(
			startWith(""),
			map(e => this.createResultsFromSearchQuery(e))
		);


	}
	ngOnInit(): void {
		this.items2 = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
				styleClass: '.fdaasdf',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
	}

	private createResultsFromSearchQuery(searchQuery: string | null): any[] {
		var results: any[] = [];
		if (!searchQuery) return results;

		let normalizedSearchQuery = searchQuery.toLowerCase();
		for (let item of this.items) {
			let nameResult = this.searchAndBreakDown(item.name, item.name.toLowerCase(), normalizedSearchQuery);
			let shortDescriptionResult = this.searchAndBreakDown(item.shortDescription, item.shortDescription.toLowerCase(), normalizedSearchQuery);

			if (!nameResult.hasMatch && !shortDescriptionResult.hasMatch) continue;

			results.push({ url: item.url, nameResult, shortDescriptionResult })
		}

		console.log(results)

		return results;
	}

	private searchAndBreakDown(text: string, normalizedText: string, normalizedSearchQuery: string): any | null {
		let indexOf = normalizedText.indexOf(normalizedSearchQuery);
		if (indexOf == -1) return { hasMatch: false, pre: text, highlight: "", post: "" };

		let start = 0;
		let midStart = indexOf;
		let midEnd = indexOf + normalizedSearchQuery.length;
		let end = text.length;

		return { hasMatch: true, pre: text.substring(start, midStart), highlight: text.substring(midStart, midEnd), post: text.substring(midEnd, end) }
	}
}
