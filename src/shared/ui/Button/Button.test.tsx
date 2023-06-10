import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
    /* i18next-extract-disable-next-line */
        render(<Button>TEST</Button>);
        /* i18next-extract-disable-next-line */
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test clear theme', () => {
    /* i18next-extract-disable-next-line */
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        /* i18next-extract-disable-next-line */
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
