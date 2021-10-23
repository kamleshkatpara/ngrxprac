import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Post } from "../models/posts.model";

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.api_url}/posts`)
            .pipe(
                map((data) => {
                    const posts: Post[] = [];
                    for (const key in data) {
                        posts.push({ ...data[key] });
                    }
                    return posts;
                })
            )
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(`${environment.api_url}/posts`, post)
    }

    updatePost(post: any) {
        const postData = {
            [post.id]: { title: post.title, description: post.description },
        };
        return this.http.patch(`${environment.api_url}/posts`, postData)
    }

    deletePost(id: number) {
        return this.http.delete(
            `${environment.api_url}/posts/${id}`
        );
    }
}