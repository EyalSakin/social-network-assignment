import {Injectable} from "@angular/core";
import {PostsStore} from "./posts.store";
import {HttpClient} from "@angular/common/http";
import {Post, ServerPost} from "./post.model";
import {map} from "rxjs";
import * as moment from 'moment';

@Injectable({ providedIn: "root" })
export class PostsService {
    constructor(private postsStore: PostsStore, private httpClient: HttpClient) {}

    public setInitialData(): void {
        this.httpClient.get<ServerPost[]>('http://localhost:3000/api/posts')
            .pipe(
                map(this.postsNormalizer)
            )
            .subscribe((posts: Post[]) => {
                this.postsStore.set(posts)
            });
    }

    postsNormalizer = (serverPosts: ServerPost[]): Post[] => {
        return serverPosts.map((serverPost: any): Post => {
            const dateString: string = serverPost.created_at.replace(/\s/g, '');
            const date: Date = new Date(dateString);
            return {
                id: serverPost._id,
                userName: serverPost.user_name,
                content: serverPost.content,
                email: serverPost.email,
                createdAt: moment(date).format('DD/MM/YYYY hh:ss'),
                tags: serverPost.tags
            }
        })
    }
}