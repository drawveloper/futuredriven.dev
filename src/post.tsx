import {
  component$,
  onRender$,
} from "@builder.io/qwik";
import { PostState } from "./blog.ts";

export const Post = component$(async (props: {id: string}) => {
  const jsonResponse = await fetch(`http://localhost:8080/api/posts/${props.id}`)
  const state = await jsonResponse.json() as PostState
  return onRender$(() => (
    <div class="w-full p-12 overflow-hidden">
      <h1>{state.title}</h1>
      <div innerHTML={state.content}></div>
    </div>
  ));
});
