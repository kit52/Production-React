//@ts-ignore
import { Story } from '@storybook/react';
//@ts-ignore
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);



// import { Story } from '@storybook/blocks';

// import { BrowserRouter } from 'react-router-dom';

// export const RouterDecorator = () => ((Story: any) => (
//   <BrowserRouter>
//     <Story />
//   </BrowserRouter>
// ));
