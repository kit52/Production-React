import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
// import type { Preview } from '@storybook/react';

// import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
// import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
// import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },

//   },
//   decorators: [RouterDecorator(), StyleDecorator(), ThemeDecorator(Theme.LIGHT)],

// };

// export default preview;
