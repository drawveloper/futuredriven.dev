/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts";

export const Link = (props: any) => (
  <a
    style="color: #0055FF;"
    class={tw`underline`}
    {...props}
  >
    {props.children}
  </a>
);
