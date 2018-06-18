import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../userService';
import { Stream } from '../Models/Stream';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css']
})
export class StreamListComponent implements OnInit {
  // we should limit the number of tracks that we get, for ex 10 each time
  tracks: Stream ;
  @Input() userId: number;
  constructor( private route: ActivatedRoute, private userService: UserService) {
    this.tracks = new Stream();
   }

  ngOnInit() {
    this.userService.getUserMainStream().subscribe(streamTracks => {
      this.tracks = <Stream>streamTracks;
    });
  }
  nextStreamPage(isPlayNext) {
    this.userService.getMainStreamNext(this.tracks.next_href).subscribe(streamTracks => {
      if (isPlayNext) {
        this.userService.playTrack((<Stream>streamTracks).collection[0].origin.id);
      }
      this.tracks.next_href = (<Stream>streamTracks).next_href;
      this.tracks.collection = this.tracks.collection.concat((<Stream>streamTracks).collection);
    });
  }

  playNextOrPre(direction) {
    const currentTrackId = this.userService.getCurrentTrackId();
    const nextTrackIndex = (this.tracks.collection.map(function(e) { return e.origin.id; })).indexOf(currentTrackId) + direction;
    if (this.tracks.collection.length === nextTrackIndex ) {
       this.nextStreamPage(true);
    } else if (nextTrackIndex >=  0) {
      this.userService.playTrack(this.tracks.collection[nextTrackIndex].origin.id);
    }
  }

  playShuffle() {
    const ids =  (this.tracks.collection.map(function(e) { return e.origin.id; }));
    const shuffleList = [] ;
    for (let i = 0; i < this.tracks.collection.length; i++) {
      const index = Math.floor((Math.random() * ids.length));
      shuffleList.push(ids[index]);
      ids.splice(index, 1);
    }
  }
}
