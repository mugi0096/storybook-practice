export * from '~~/.nuxt-storybook/storybook/preview.js';

import {
  VApp,
  VMain,
} from 'vuetify/lib';

export const decorators = [
  (story, context) => {
    return {
      components: {
        VApp,
        VMain,
      },

      template: /* html */ `
        <v-app>
          <v-main>
            <story />
          </v-main>
        </v-app>
      `,
    };
  },
];
