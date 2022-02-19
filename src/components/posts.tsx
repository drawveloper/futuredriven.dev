/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts"
import { PostsState } from "../posts.ts";

export const Posts = (props: {posts: PostsState}) => (
  props.posts.map((post: any) => (
      <div class={tw`flex flex-col w-full justify-center items-start overflow-y-hidden`}>
        <a href={post.url} class={tw`no-underline`}>
          <h1 class={tw`my-4 text-3xl md:text-5xl text-indigo-900 font-bold leading-tight text-left`}>
            {post.title}
          </h1>
        </a>
        <div class={tw`leading-normal text-base md:text-2xl mb-8 text-left`}
          innerHTML={{ __dangerousHtml: post.preview }}>
        </div>
      </div>
    )
  )
)
