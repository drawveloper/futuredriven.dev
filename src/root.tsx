import {
  component$,
  Host,
  onRender$,
  withStyles$,
} from "@builder.io/qwik";
import styles from "./root.css";
import {Posts} from "./posts.tsx"
import {Post} from "./post.tsx"

export const Root = component$((props: {url: URL}) => {
  withStyles$(styles);
  const maybeId = props.url.pathname.split('-').pop()
  const renderPage = () => {
    if (props.url.pathname === "/") {
      return <Posts/>
    }
    else if (maybeId) {
      return <Post id={maybeId} />
    }
    else return <span>not found :(</span>
  }

  return onRender$(() => (
    <Host class="my-app">
      <div class="h-full">
        <div class="w-full container mx-auto">
          <div class="w-full flex items-center justify-between">
            <a
              class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              Future<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Driven
              </span>
            </a>
          </div>
        </div>
        <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
          <div class="flex flex-col w-3/5 justify-center lg:items-start overflow-y-hidden">
            {renderPage()}
          </div>
          <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
            <div class="w-full pt-16 pb-6 text-xs text-center md:text-center fade-in fixed bottom-0">
            <p style={{ "text-align": "center" }}>
              <a class="text-gray-500 no-underline hover:no-underline" href="#">
                &copy; Future Driven 2022
              </a>{" "}
              — Made in Rio with 🤍
            </p>
            </div>
          </div>
        </div>
      </div>
    </Host>
  ));
});
