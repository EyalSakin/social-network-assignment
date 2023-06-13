import {Injectable} from "@angular/core";
import {PostsStore} from "./posts.store";
import {HttpClient} from "@angular/common/http";
import {Post} from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
    constructor(private postsStore: PostsStore, private httpClient: HttpClient) {}


    setInitialData(): void {
        // this.httpClient.get('localhost:8080/posts')
        //     .subscribe((posts) => {
        //         console.log(posts);
        //         this.postsStore.update({ posts })
        //     });

        const posts: Post[] = [
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 1,
                userName: 'eyal',
                createdAt: '1/2/23',
                email: 'eyalsakin@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 2,
                userName: 'asdasd',
                createdAt: '1/2/23',
                email: 'asdasd@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            },
            {
                id: 3,
                userName: 'ggg',
                createdAt: '1/2/23',
                email: 'dfgdfgg@gmail.com',
                tags: ["tag1", "tag2"],
                content: "This is the content This is the content This is the content This is the content This is the content This is the content"
            }
        ];
        this.postsStore.set(posts);
    }
}