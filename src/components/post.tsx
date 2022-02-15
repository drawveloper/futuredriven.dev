/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { PostState } from "../posts.ts";

export const Post = (props: {post: PostState}) => (
  <div class="w-full overflow-hidden">
    <h1>{props.post.title}</h1>
    <div innerHTML={{__dangerousHtml: props.post.content}}></div>
  </div>
);
