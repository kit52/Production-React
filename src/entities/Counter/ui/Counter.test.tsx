import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { renderWithTranslation } from 'shared/lib/tests/renderWIthTranslation/renderWIthTranslation';
import { Counter } from './Counter';

describe('Counter', () => {
  test(' text', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('incr', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const Btn = screen.getByTestId('incr');
    fireEvent.click(Btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decr', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const Btn = screen.getByTestId('decr');
    fireEvent.click(Btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
