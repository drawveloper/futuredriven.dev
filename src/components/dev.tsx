/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts";
import { Link } from "./link.tsx";
import { Ruler } from "./ruler.tsx";

export const Dev = (props: any) => (
  <div
    class={tw
      `flex flex-col w-full justify-center items-start overflow-y-hidden text-lg`}
  >
    <div class={tw`max-w-sm`}>
      <span>
        Hi! My name is{" "}
        <strong>Guilherme Rodrigues</strong>, and I'm a software developer and
        investor based in <br></br>Rio de Janeiro, Brasil. 🇧🇷
      </span>
      <Ruler />
      <span>
        I'm committed to a future in which Brasil is a prosperous country, and a
        {" "}
        <strong>protagonist in technology.</strong> Learn more at{" "}
        <Link href="https://movtech.org" target="_blank">
          movtech.org
        </Link>.
      </span>
      <Ruler />
      <span>
        I am committed to{" "}
        <strong>high performance communication</strong>, and to sharing it with
        other builders. More at{"   "}
        <Link href="https://futuredriven.capital">
          futuredriven.capital
        </Link>.
      </span>
      <Ruler />
      <span>
        I write about <strong>communication, culture and coding</strong>{"  "}
        at my blog:{"   "}
        <Link href="https://futuredriven.blog">
          futuredriven.blog
        </Link>.
      </span>
    </div>
  </div>
);
