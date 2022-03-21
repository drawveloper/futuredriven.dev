/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts";
import { PostsState } from "../posts.ts";

export const Posts = (props: { posts: PostsState }) => (
  props.posts.map((post: any) => (
    <div
      class={tw
        `flex flex-col w-full justify-center items-start overflow-y-hidden`}
    >
      <small class={tw`text-gray-500`}>{post.published}</small>
      <a href={post.url} class={tw`no-underline`}>
        <h1
          style="color: #0055FF"
          class={tw
            `mb-4 mt-2 text-3xl md:text-4xl text-gray-900 leading-tight md:mr-16`}
        >
          {post.title}
        </h1>
      </a>
      <div
        class={tw`leading-normal text-base mb-8 md:w-4/5`}
        innerHTML={{ __dangerousHtml: post.preview }}
      >
      </div>
    </div>
  ))
);
