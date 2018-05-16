import {html} from '@polymer/lit-element';

export const theme = html`
  <dom-module id="my-checkbox" theme-for="vaadin-checkbox">
    <template>
      <style>
        :host {
          display: block;
        }
        [part="checkbox"] {
          border-radius: 50%;
        }
        :host([checked]) [part="checkbox"] {
          background-color: var(--app-primary-color);
        }
      </style>
    </template>
  </dom-module>
`