import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('btn text', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('with only first param', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
