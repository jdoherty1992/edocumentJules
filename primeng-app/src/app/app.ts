import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNav } from './side-nav/side-nav';
import { EDocumentList } from './e-document-list/e-document-list';
import { EDocumentView } from './e-document-view/e-document-view';
import { InfoPanel } from './info-panel/info-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNav, EDocumentList, EDocumentView, InfoPanel],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}