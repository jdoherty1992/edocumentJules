import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNav } from './side-nav/side-nav';
import { EDocumentList } from './e-document-list/e-document-list';
import { EDocumentView } from './e-document-view/e-document-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNav, EDocumentList, EDocumentView],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}