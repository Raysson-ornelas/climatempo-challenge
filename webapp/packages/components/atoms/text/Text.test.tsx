import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Text, H1 } from '.';

describe('Text component', () => {
  test('renders a text with the test label and default variant ', () => {
    const { getByText } = render(<Text label='test' variant='default' />);
    const text = getByText('test');
    expect(text).toBeTruthy();
    expect(text).toHaveClass('text-xl font-medium');
  });

  test('renders a text with the test label and up variant ', () => {
    const { getByText } = render(<Text label='test' variant='up' />);
    const text = getByText('test');
    expect(text).toBeTruthy();
    expect(text).toHaveClass('text-xl font-medium text-red-500');
  });

  test('renders a text with the test label and down variant ', () => {
    const { getByText } = render(<Text label='test' variant='down' />);
    const text = getByText('test');
    expect(text).toBeTruthy();
    expect(text).toHaveClass('text-xl font-medium text-blue-500');
  });
});

describe('H1 component', () => {
  test('renders a H1 with the test label', () => {
    const { getByText } = render(<H1 label='test' />);
    const h1 = getByText('test');
    expect(h1).toBeTruthy();
    expect(h1).toHaveClass('text-xl font-semibold');
  });
});
