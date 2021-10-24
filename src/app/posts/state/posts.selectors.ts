import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "../state/posts.state";

export const POST_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})

export const getPostById = (id: number | null) => {
    return createSelector(getPostsState, (state) => {
        return state.posts.find((post) => post.id === id);
    })
} 