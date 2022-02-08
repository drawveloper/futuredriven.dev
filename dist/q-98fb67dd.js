import{j as n,H as o,w as a,q as e,a as i,o as s}from"./q-f941dbf4.js";import{_ as t}from"./assets/index.94f8ddd6.js";var l=`/*
! tailwindcss v3.0.18 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.bottom-0 {
  bottom: 0px;
}
.z-10 {
  z-index: 10;
}
.m-6 {
  margin: 1.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
.-rotate-6 {
  --tw-rotate: -6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded {
  border-radius: 0.25rem;
}
.border {
  border-width: 1px;
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-green-400 {
  --tw-gradient-from: #4ade80;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(74 222 128 / 0));
}
.from-purple-800 {
  --tw-gradient-from: #6b21a8;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(107 33 168 / 0));
}
.via-pink-500 {
  --tw-gradient-stops: var(--tw-gradient-from), #ec4899, var(--tw-gradient-to, rgb(236 72 153 / 0));
}
.to-purple-500 {
  --tw-gradient-to: #a855f7;
}
.to-green-500 {
  --tw-gradient-to: #22c55e;
}
.bg-cover {
  background-size: cover;
}
.bg-fixed {
  background-attachment: fixed;
}
.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}
.p-3 {
  padding: 0.75rem;
}
.p-12 {
  padding: 3rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.pt-24 {
  padding-top: 6rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-16 {
  padding-top: 4rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.text-center {
  text-align: center;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.leading-normal {
  line-height: 1.5;
}
.leading-tight {
  line-height: 1.25;
}
.tracking-normal {
  letter-spacing: 0em;
}
.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(129 140 248 / var(--tw-text-opacity));
}
.text-transparent {
  color: transparent;
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
.no-underline {
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}
.opacity-75 {
  opacity: 0.75;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-700 {
  transition-duration: 700ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.hover\\:rotate-6:hover {
  --tw-rotate: 6deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:from-pink-500:hover {
  --tw-gradient-from: #ec4899;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(236 72 153 / 0));
}
.hover\\:to-green-500:hover {
  --tw-gradient-to: #22c55e;
}
.hover\\:no-underline:hover {
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}
.focus\\:ring:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
@media (min-width: 768px) {

  .md\\:w-4\\/5 {
    width: 80%;
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:pt-36 {
    padding-top: 9rem;
  }

  .md\\:text-left {
    text-align: left;
  }

  .md\\:text-center {
    text-align: center;
  }

  .md\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
@media (min-width: 1024px) {

  .lg\\:items-start {
    align-items: flex-start;
  }

  .lg\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
@media (min-width: 1280px) {

  .xl\\:w-2\\/5 {
    width: 40%;
  }

  .xl\\:w-3\\/5 {
    width: 60%;
  }
}
`;const d=l,c=()=>n(o,{class:"my-app",children:[n("div",{class:"h-full",children:[n("div",{class:"w-full container mx-auto",children:n("div",{class:"w-full flex items-center justify-between",children:n("a",{class:"flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl",href:"#",children:["Mesa",n("span",{class:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500",children:".land"})]})})}),n("div",{class:"container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between",children:[n("div",{class:"flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden",children:[n("h1",{class:"my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left",children:["Play"," ",n("span",{class:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500",children:"amazing card games"})," ","... and create your own!"]}),n("p",{class:"leading-normal text-base md:text-2xl mb-8 text-center md:text-left",children:"The end-to-end online cardgame platform for card game designers and illustrators."}),n("form",{class:"bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4",children:[n("div",{class:"mb-4",children:[n("label",{class:"block text-blue-300 py-2 font-bold mb-2",htmlFor:"emailaddress",children:"Signup for our newsletter"}),n("input",{class:"shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out",id:"emailaddress",type:"text",placeholder:"you@somewhere.com"})]}),n("div",{class:"flex items-center justify-between pt-4",children:n("button",{class:"bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",type:"button",children:"Sign Up"})})]})]}),n("div",{class:"w-full xl:w-3/5 p-12 overflow-hidden",children:n("a",{href:"https://github.com/gadrrio/mesa.land",children:n("div",{class:"transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6",children:[n("img",{alt:"Mesa.land Logo",width:100,src:"/Mesa-label.png",class:"absolute z-10",style:{left:"100px",top:"60px"}}),n("img",{class:"mx-auto w-full md:w-4/5",src:"macbook.svg"})]})})}),n("div",{class:"w-full pt-16 pb-6 text-xs text-center md:text-center fade-in fixed bottom-0",children:[n("a",{class:"text-gray-500 no-underline hover:no-underline",href:"#",children:"\xA9 Mesa.land 2022"})," ","\u2014 Made in"," ",n("a",{target:"_blank",class:"underline",href:"https://gadr.rio/",children:"Rio"})," ","with \u{1F90D}"]})]})]}),n("p",{style:{"text-align":"center"}})]}),p=()=>(a(e(()=>t(()=>Promise.resolve().then(function(){return r}),void 0),"Root_component_withStyles")),i({name:"World"}),s(e(()=>t(()=>Promise.resolve().then(function(){return r}),void 0),"Root_component_onRender")));var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Root_component_withStyles:d,Root_component_onRender:c,Root_component:p});export{p as Root_component,c as Root_component_onRender,d as Root_component_withStyles};
