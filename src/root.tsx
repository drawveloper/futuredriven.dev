import { createStore, onRender$, component$, useEvent, Host, withStyles$ } from '@builder.io/qwik';
import styles from './root.css';

export const Root = component$(() => {
  withStyles$(styles);

  const state = createStore({ name: 'World' });
  return onRender$(() => (
    <Host class="my-app">
      <p style={{ 'text-align': 'center' }}>
        <a href="https://github.com/gadrrio/mesa.land">
          <img
            alt="Mesa.land Logo"
            width={300}
            src="/Mesa-label.png"
          />
        </a>
      </p>
      <p>Mesa.land</p>

      <p style={{ 'text-align': 'center' }}>
        Made with 🤍 in{' '}
        <a target="_blank" href="https://www.builder.io/">
          Rio
        </a>
      </p>
    </Host>
  ));
});
