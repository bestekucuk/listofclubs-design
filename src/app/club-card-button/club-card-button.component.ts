import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-club-card-button',
  templateUrl: './club-card-button.component.html',
  styleUrls: ['./club-card-button.component.scss'],
})
export class ClubCardButtonComponent implements OnInit {
  @Input() post!: BlogPost;
  constructor() {}
  bfunction(): void {
    if (this.post.follow == true) {
      this.post.follow = false;
    } else {
      this.post.follow = true;
    }
    console.log(this.post);
  }

  ngOnInit(): void {}

  afunction(): void {
    if (this.post.follow == true) {
      this.post.follow = false;
    } else {
      this.post.follow = true;
    }
    console.log(this.post);
  }
}
