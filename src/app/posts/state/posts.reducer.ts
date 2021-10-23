import { Action, createReducer, on } from "@ngrx/store";
import { addPostSuccess, deletePost, loadPostsSuccess, updatePost } from "./posts.actions";
import { initialState, PostsState } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post };

        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });


        return {
            ...state,
            posts: updatedPosts,
        }
    }),
    on(deletePost, (state, { id }) => {
        const updatedPosts = state.posts.filter((post) => {
            return post.id !== id;
        });

        return {
            ...state,
            posts: updatedPosts,
        };
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    })
);

export function postsReducer(state: PostsState | undefined, action: Action) {
    return _postsReducer(state, action)
}