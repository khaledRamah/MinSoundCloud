import { Track } from '../Models/Track';
import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { UserService } from '../userService';

@Component({
  selector: 'app-single-track',
  templateUrl: './single-track.component.html',
  styleUrls: ['./single-track.component.css']
})
export class SingleTrackComponent implements OnInit {
  @Input() streamTrack: Track;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getDuration(millisecond) {
    return (millisecond - (millisecond % (1000 * 60))) / (1000 * 60) + ':' +  Math.round(millisecond % (1000 * 60) / 1000);
  }

  play() {
    this.userService.playTrack(this.streamTrack.id);
  }
  pause() {
    this.userService.pauseTrack(this.streamTrack.id);
  }

  isCurrenTrackPlayed() {
    return this.userService.isPlayed(this.streamTrack.id);
  }
}
