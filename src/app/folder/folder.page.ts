import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTML } from 'src/HTML';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, AfterViewInit {
  public folder: string;

  @ViewChild('content') content: ElementRef;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngAfterViewInit() {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'contentDiv';
    contentDiv.innerHTML = HTML.code();

    this.content.nativeElement.appendChild(contentDiv);
  }
}
