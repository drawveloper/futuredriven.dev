/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { tw } from "../deps.ts";
import { Posts } from "./posts.tsx"
import { Post } from "./post.tsx"
import { PostState, PostsState } from "../posts.ts";

export const Layout = (props: { post: PostState, posts: PostsState }) => {
  const renderPage = () => {
    if (props.posts) {
      return <Posts posts={props.posts} />
    }
    else if (props.post) {
      return <Post post={props.post} />
    }
    else return <span>404 - not found :(</span>
  }

  return (
    <div class={tw`h-full`}>
      <div class={tw`w-full container mx-auto`}>
        <div class={tw`w-full flex items-center justify-between`}>
          <a
            class={tw`flex items-center no-underline hover:no-underline font-bold text-xl lg:text-2xl`}
            href="/"
          >
            Future<span class={tw`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-700 to-indigo-900`}>
              Driven
            </span>
          </a>
        </div>
      </div>
      <div class={tw`container pt-6 lg:pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between`}>
        <div class={tw`flex flex-col lg:w-3/5 justify-center items-start overflow-y-hidden`}>
          {renderPage()}
        </div>
        <div class={tw`w-full pt-16 pb-6 text-xs text-center md:text-center fade-in`}>
          <p style={{ "text-align": "center" }}>
            <a class={tw`text-gray-500 no-underline hover:no-underline`} href="#">
              &copy; Future Driven 2022
            </a>{" "}
            — Made in Rio with 🤍
          </p>
        </div>
      </div>
    </div>
  )
}