import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "src/app/posts/state/posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})