import {
  Host,
  component$,
  onRender$,
} from "@builder.io/qwik";
import { PostsState } from "./blog.ts";

export const Posts = component$(async () => {
  const jsonResponse = await fetch("http://localhost:8080/api/posts")
  const posts = await jsonResponse.json() as PostsState
  const state = {
    posts
  }
  return onRender$(() => (<>
  {state.posts.map((post: any) => (
    <a href={post.url}>
      <div class="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
        <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          {post.title}
        </h1>
        <div class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"
          innerHTML={post.preview}>
        </div>
      </div>
    </a>))}
  </>));
});
