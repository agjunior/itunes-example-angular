import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private apiUrl = 'https://itunes.apple.com/lookup?';
	private albumsId = ['1299289839', '1055074478']

	albums: any = [];

	constructor(private http: Http) {
		this.getSongsByAlbum();
	}

  	private getSongsByAlbum() {

  		for(let albumId of this.albumsId) {

  			this.http.get(this.apiUrl + 'id=' + albumId + '&entity=song')
				.subscribe(result => {
					this.albums.push(result.json().results);
				});
  		}
	}
}