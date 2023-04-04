import { Story } from '@storybook/blocks';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// export function ThemeDecorator() {
//   return ((Story:any) => (
//     <div style={{ margin: '3em' }}>
//       <Story />
//     </div>
//   ));
// }
export const ThemeDecorator = (theme: Theme) => (Story:any) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
