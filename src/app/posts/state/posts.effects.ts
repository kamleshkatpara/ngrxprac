import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addPostSuccess, loadPosts, loadPostsSuccess } from "./posts.actions";

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostsService) { }

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(loadPosts),
        mergeMap(() =>
            this.postsService.getPosts().pipe(
                map((posts) =>
                    loadPostsSuccess({ posts })
                )
            )
        )
    )
    );


    addPost$ = createEffect(() => this.actions$.pipe(
        ofType(addPost),
        mergeMap(action =>
            this.postsService.addPost(action.post).pipe(
                map((post) => addPostSuccess({ post }))
            )
        )
    ))
}