/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts"
import { PostState } from "../posts.ts";

export const Post = (props: {post: PostState}) => (
  <div class={tw`w-full overflow-hidden`}>
    <h1>{props.post.title}</h1>
    <div innerHTML={{__dangerousHtml: props.post.content}}></div>
  </div>
);
