/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { tw } from "../deps.ts";
import { Posts } from "./posts.tsx";
import { Post } from "./post.tsx";
import { AppState } from "./state.ts";
import { Dev } from "./dev.tsx";

export const Layout = (props: AppState) => {
  const renderTLD = () => (
    <span class={tw`pl-1 text-black font-light`}>
      {props.blog ? "Blog" : props.capital ? "Capital" : props.dev ? "Dev" : ""}
    </span>
  );

  const renderPage = () => {
    if (props.posts) {
      return <Posts posts={props.posts} />;
    } else if (props.post) {
      return <Post post={props.post} />;
    } else if (props.capital) {
      return <span>Coming Soon</span>;
    } else if (props.dev) {
      return <Dev />;
    } else return <span>404 - not found :(</span>;
  };

  return (
    <div class={tw`container mx-auto lg:w-4/5 `}>
      <div class={tw`flex items-center justify-between`}>
        <a
          class={tw
            `flex items-center no-underline hover:no-underline font-bold text-2xl`}
          href="/"
        >
          <img
            src="/future-driven-logo-v.png"
            alt="Future Driven"
            style="width: 183px; margin-right: -3px;"
          />
          {renderTLD()}
        </a>
      </div>
      <div class={tw`container pt-6 lg:pt-12 lg:w-3/5`}>
        <div
          class={tw`flex flex-col justify-center items-start overflow-y-hidden`}
        >
          {renderPage()}
        </div>
        <div
          class={tw`pt-20 pb-6 text-xs text-gray-500 `}
        >
          <p>
            <a
              class={tw`no-underline hover:no-underline`}
              href="#"
            >
              &copy; Future Driven 2022
            </a>{" "}
            — Made in Rio with {props.dev || props.blog ? "💚" : "💙"}
          </p>
        </div>
      </div>
    </div>
  );
};
