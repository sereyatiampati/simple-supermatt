import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    styleUrl: './header.component.css',
    // styleUrls: [./header.component.css, ./another-stylingsheet.css] this takes an array of styling sheet that you want included
    // styles: ['h1 { color: red}'] //this is in line styling
})
export class HeaderComponent {}