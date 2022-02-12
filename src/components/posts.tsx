/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { PostsState } from "../posts.ts";

export const Posts = (props: {posts: PostsState}) => (
  <>
  {
    props.posts.map((post: any) => (
        <div class="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
          <a href={post.url}>
            <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              {post.title}
            </h1>
          </a>
          <div class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"
            innerHTML={{ __dangerousHtml: post.preview }}>
          </div>
        </div>
      )
    )
  }
  </>
)
