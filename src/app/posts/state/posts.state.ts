import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [
        { id: '1', title: 'Sample Title One', description: 'Sample Description One' },
        { id: '2', title: 'Sample Title Two', description: 'Sample Description Two' },
    ]
};