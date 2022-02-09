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
            FutureDriven<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">.Dev</span>
          </a>          
        </div>
      </div>

      <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
        

        <div class="w-full pt-16 pb-6 text-xs text-center md:text-center fade-in fixed bottom-0">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; futuredriven.dev 2022</a>{' '}
          — Made in Rio with 🤍
        </div>
      </div>
    </div>

      <p style={{ 'text-align': 'center' }}>
        
      </p>
    </Host>
  ));
});
