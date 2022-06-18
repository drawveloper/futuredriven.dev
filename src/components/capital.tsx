/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { Helmet, tw } from "../deps.ts";

export const Capital = (props: any) => (
  <div
    class={tw
      `flex flex-col w-full justify-center items-start overflow-y-hidden text-md md:text-lg lg:max-w-xl`}
  >
    <div class={tw``} style="min-height: 400px;">
      <div class={tw`mb-6`}>
        <h1 class={tw`text-6xl font-bold mb-6`}>
          Everything depends on the future.
        </h1>
        <p>
          All humans live inside a future. The future ahead of us informs our
          actions. It literally creates reality for us. And it happens in
          language. The future only exists in language.
        </p>
      </div>

      <h1 class={tw`text-6xl font-bold mb-6`}>Language creates reality.</h1>
      <p>
        All humans live inside a future. The future ahead of us informs our
        actions. It literally creates reality for us. And it happens in
        language. The future only exists in language.
      </p>
      <br />
      <p>
        Is this a{" "}
        <a href="#square" class={tw`underline`} style="color: #0055FF;">
          square?
        </a>{" "}
        Or a{" "}
        <a href="#circle" class={tw`underline`} style="color: #0055FF;">
          circle?
        </a>
      </p>
      <div id="perspective">
      </div>
      {/* TODO: Example with two levers, pulling one up brings another up and then some. "How much I get out of this is how much I put in it." */}
    </div>
    <Helmet footer>
      <script src="https://unpkg.com/p5@1.4.1/lib/p5.min.js">
      </script>
      <script src="/perspective.js"></script>
    </Helmet>
  </div>
);
