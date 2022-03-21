/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts";
import { PostState } from "../posts.ts";

export const Post = (props: { post: PostState }) => (
  <div class={tw`w-full overflow-hidden` + " markdown"}>
    <small class={tw`text-gray-500`}>{props.post.published}</small>
    <h1
      style="color: #0055FF"
      class={tw
        `mb-4 mt-2 text-3xl md:text-4xl text-gray-900 leading-tight md:mr-16`}
    >
      {props.post.title}
    </h1>
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
    <div class={tw`md:w-4/5`}>
      <div
        innerHTML={{ __dangerousHtml: props.post.content }}
      >
      </div>
    </div>
  </div>
);
