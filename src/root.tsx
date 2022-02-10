import {
  component$,
  createStore,
  Host,
  onRender$,
  useEvent,
  withStyles$,
} from "@builder.io/qwik";
import { BlogState } from "./blog.ts";
import styles from "./root.css";

export const Root = component$((props: {state: BlogState}) => {
  withStyles$(styles);
  console.log('>>>state in root', props.state)
  return onRender$(() => (
    <Host class="my-app">
      <div class="h-full">
        <div class="w-full container mx-auto">
          <div class="w-full flex items-center justify-between">
            <a
              class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              Future<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Driven
              </span>
            </a>
          </div>
        </div>

        <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            {(props.state.posts) && props.state.posts.map((post: any) => 
              (<a href={post.url}>
                <div>
                  <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    {post.title.plain_text}
                  </h1>
                  <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                    {post.preview}
                  </p>
                </div>
              </a>))}
              {(props.state.post) && (
                  <div>$POST$</div>)}
          </div>
        </div>

        <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
          <div class="w-full pt-16 pb-6 text-xs text-center md:text-center fade-in fixed bottom-0">
            <a class="text-gray-500 no-underline hover:no-underline" href="#">
              &copy; Future Driven 2022
            </a>{" "}
            — Made in Rio with 🤍
          </div>
        </div>
      </div>

      <p style={{ "text-align": "center" }}>
      </p>
    </Host>
  ));
});
