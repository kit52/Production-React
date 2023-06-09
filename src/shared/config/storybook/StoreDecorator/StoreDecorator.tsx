import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider>
        <div className={`app`}>
          <StoryComponent />
        </div>
      </StoreProvider>
    );
