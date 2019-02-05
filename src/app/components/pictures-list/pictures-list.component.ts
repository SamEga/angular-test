import { Component, OnInit } from '@angular/core';
import { PicturesListService } from '../../services/pictures-list.service';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {
  private photos = [];
  private loading = false;
  constructor(public picturesList: PicturesListService) {}

  ngOnInit() {
    this.picturesList.getPictures().subscribe(response => {
      this.photos = response.photos;
      this.loading = true;
    });
  }
}
