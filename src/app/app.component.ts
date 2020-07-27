import { Component } from '@angular/core';

export interface Movie {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  playlist: Array<Movie> = [
      {
          title: 'movie-playlist',
          src: 'https://valuefy-assignment-x.herokuapp.com/api/getVideos',
          type: 'video/mp4'
      }
  ];

  currentIndex = 0;
    currentItem: Movie = this.playlist[ this.currentIndex ];

    onClickPlaylistItem(item: Movie) {
        this.currentIndex = index;
        this.currentItem = item;
    }
}
