import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppsListsService {

  apps = [
    // { name: "Okta Users", shortDescription: "Use Okta to look up users", url: "/identity-services/user/45" },
    // { name: "Okta Groups", shortDescription: "Use Okta to look up groups", url: "/identity-services/group/45" },
    { name: "App Home", shortDescription: "Home page of app", url: "/" },
    { name: "Dashboards", shortDescription: "A list of my dashboards", url: "/dashboards" },
  ]

  constructor() { }

  public createResultsFromSearchQuery(searchQuery: string | null): any[] {
    var results: any[] = [];
    if (!searchQuery) return results;

    let normalizedSearchQuery = searchQuery.toLowerCase();
    for (let app of this.apps) {
        let nameResult = this.searchAndBreakDown(app.name, app.name.toLowerCase(), normalizedSearchQuery);
        let shortDescriptionResult = this.searchAndBreakDown(app.shortDescription, app.shortDescription.toLowerCase(), normalizedSearchQuery);

        if (!nameResult.hasMatch && !shortDescriptionResult.hasMatch) continue;

        results.push({ url: app.url, nameResult, shortDescriptionResult })
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
