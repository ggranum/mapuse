import { Location } from '@angular/common';
import {
  Component,
  OnInit,
  Optional
} from '@angular/core';

@Component({
  selector: 'dm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme: string;

  constructor(@Optional() private  location: Location) {
    console.log('AppComponent', 'constructor')
    debugger
  }
  ngOnInit() {
    // Can't use the ActivatedRoute interface here because we're getting the route outside the router-outlet
    let path = this.location.path(false);
    // Extract the last part of the URL path, while filtering off any query parameters.
    // The path is restricted to lower case a-z because all our collections fit into that pattern.
    let collection = path.match(/.*\/([a-z]+\d?)(\?.*)?/);

    if (!collection) {
      throw `invalid url - ${path}`;
    }

    this.theme = `${collection[1]}-theme`;
  }
}
