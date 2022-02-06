import { createStore, onRender$, component$, useEvent, Host, withStyles$ } from '@builder.io/qwik';
import styles from './root.css';

export const Root = component$(() => {
  withStyles$(styles);

  const state = createStore({ name: 'World' });
  return onRender$(() => (
    <Host class="my-app">
      <div class="h-full">
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Mesa<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">.land</span>
          </a>          
        </div>
      </div>

      <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Play{' '}
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              amazing card games
            </span>
            {' '}
            ... and create your own!
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            The end-to-end online cardgame platform for card game designers and illustrators.
          </p>

          <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
                Signup for our newsletter
              </label>
              <input
                class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="you@somewhere.com"
              />
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/*  Create beautiful games quickly. Grow your community. Get paid fairly. */}
        
        <div class="w-full xl:w-3/5 p-12 overflow-hidden">

          <a href="https://github.com/gadrrio/mesa.land">        
            <div class="transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
              <img
                alt="Mesa.land Logo"
                width={100}
                src="/Mesa-label.png"
                class="absolute z-10"
                style={{"left": "100px", "top": "60px"}}
              />
              <img class="mx-auto w-full md:w-4/5" src="macbook.svg" />
            </div>
          </a>
          
        </div>

        <div class="w-full pt-16 pb-6 text-xs text-center md:text-center fade-in fixed bottom-0">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; Mesa.land 2022</a>{' '}
          — Made in{' '}
          <a target="_blank" class="underline" href="https://gadr.rio/">
            Rio
          </a>
          {' '}
          with 🤍
        </div>
      </div>
    </div>

      <p style={{ 'text-align': 'center' }}>
        
      </p>
    </Host>
  ));
});
