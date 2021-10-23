import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { PostsService } from "src/app/services/posts.service";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions";

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

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            switchMap((action) => {
                return this.postsService.updatePost(action.post).pipe(
                    map((data) => {
                        return updatePostSuccess({ post: action.post });
                    })
                );
            })
        );
    });

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePost),
            switchMap((action) => {
                return this.postsService.deletePost(Number(action.id)).pipe(
                    map((data) => {
                        return deletePostSuccess({ id: action.id });
                    })
                );
            })
        );
    });
}