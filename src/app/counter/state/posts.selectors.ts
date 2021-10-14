import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "src/app/posts/state/posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})

export const getPostById = (id: any) => createSelector(getPostsState, (state) => {
    return state.posts.find((post) => post.id === id);
})