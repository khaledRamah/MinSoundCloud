import { StreamListComponent } from '../stream-list/stream-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-functionality-bar',
  templateUrl: './functionality-bar.component.html',
  styleUrls: ['./functionality-bar.component.css']
})
export class FunctionalityBarComponent implements OnInit {
  userId: string ;
  @ViewChild (StreamListComponent)
  private childListComponent: StreamListComponent;

  constructor( private route: ActivatedRoute) {
  }
  ngOnInit() {
   this.userId = this.route.snapshot.paramMap.get('userId');
  }
  playNext () {
    this.childListComponent.playNextOrPre(1);
  }
  playPre () {
    this.childListComponent.playNextOrPre(-1);
  }
}
