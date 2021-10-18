import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from 'src/app/posts/state/posts.selectors';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post> | any

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure, you want to delete this post ?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
