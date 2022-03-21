/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts";
import { PostState } from "../posts.ts";

export const Post = (props: { post: PostState }) => (
  <div class={tw`w-full overflow-hidden` + " markdown"}>
    <h1 class={tw`text-3xl mb-6 font-bold`}>{props.post.title}</h1>
    <style>
      {`.markdown h2 {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        font-weight: bold;
        font-size: 1.5em;
      }
      .markdown p {
        margin-bottom: 10px;
      }
      `}
    </style>
    <div innerHTML={{ __dangerousHtml: props.post.content }}></div>
  </div>
);
