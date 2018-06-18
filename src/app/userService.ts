import { User } from './Models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as soundCloudPlayer from 'soundcloud';

@Injectable()
export class UserService {
  private URL = 'http://api.soundcloud.com/';
  private client_id = 'e2a6681bccff23130855618e14c481af';
  private redirect_Url = 'http://external.codecademy.com/soundcloud.html';
  private oauth_token = '';

  private currSoundPlayer ;
  private currPlayedTrackId = -1 ;

  private userInfo;

  constructor( private http: HttpClient) {
     soundCloudPlayer.initialize({
     client_id : this.client_id,
     redirect_uri : this.redirect_Url
    });
    this.userInfo = new User();
  }
  setUserInfo(user) {
    this.userInfo = user;
  }
  getUserInfo() {
    return this.userInfo;
  }
  getCurrentTrackId() {
    return this.currPlayedTrackId;
  }
  setOauthtoken(oauth_token: string) {
    this.oauth_token = oauth_token;
  }

  getUserProfileData(oauth_token: string) {
    const completeUrl = this.URL + 'me?' + 'oauth_token=' + oauth_token;
    return this.http.get(completeUrl);
  }

  getUserMainStream() {
    const completeUrl = this.URL + 'me/activities/tracks/exclusive?' + 'oauth_token=' + this.oauth_token;
    return this.http.get(completeUrl);
  }

  getMainStreamNext(completeUrl) {
    return this.http.get(completeUrl + '&oauth_token=' + this.oauth_token);
  }

  getTrackInfo(trackId) {
    const completeUrl = this.URL + 'tracks/' + trackId + '?client_id=' + this.client_id;
    return this.http.get(completeUrl);
  }

  pauseTrack(trackId) {
    if (this.currSoundPlayer._result.isPlaying()) {
      this.currSoundPlayer._result.pause();
    }
  }

  playTrack(trackId) {
    if (this.currPlayedTrackId === trackId) {
      this.currSoundPlayer._result.play();
    } else {
      this.currPlayedTrackId = trackId;
      this.currSoundPlayer = soundCloudPlayer.stream('/tracks/' + trackId).then(function(player) {
        player.play();
        return player;
      });
    }
  }

  isPlayed(TrcakId) {
    return this.currPlayedTrackId === TrcakId && this.currSoundPlayer._result != null
       && this.currSoundPlayer._result.isPlaying();
  }
}
