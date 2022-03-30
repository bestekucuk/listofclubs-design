import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss'],
})
export class ClubListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  constructor() {}
  ngOnInit(): void {
    this.blogPosts.push(
      new BlogPost('küçük', '/assets/dag.jpg', true, true, 0, 0)
    );
    this.blogPosts.push(
      new BlogPost('beste', '/assets/i.jpg', true, false, 1, 1)
    );
    this.blogPosts.push(
      new BlogPost('küçük', '/assets/dag.jpg', true, true, 0, 0)
    );
    this.blogPosts.push(
      new BlogPost('küçük', '/assets/dag.jpg', true, true, 0, 0)
    );
    this.blogPosts.push(
      new BlogPost('küçük', '/assets/dag.jpg', true, true, 0, 0)
    );

    this.blogPosts.push(
      new BlogPost('küçük', '/assets/dag.jpg', true, true, 0, 0)
    );
  }
}
