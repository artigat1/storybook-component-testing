// .storybook/preview.js
import {
  Preview,
  setup
} from '@storybook/vue3'
import SvgIcon from '@jamescoyle/vue-icon'
import '@mdi/font/css/materialdesignicons.css'

setup((app) => {
  app.component('SvgIcon', SvgIcon);
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
