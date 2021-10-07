import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm!.touched && !descriptionForm!.valid) {
      if (descriptionForm!.errors!.required) {
        return 'Description is required';
      } else if (descriptionForm!.errors!.minlength) {
        return 'Description should be of minimum 10 characters length';
      } else { return; }
    } else {
      return;
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      id: ''
    };

    this.store.dispatch(addPost({ post }));
  }
}