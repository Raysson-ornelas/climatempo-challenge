import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Container } from '.';

describe('Container component', () => {
  test('renders a container', () => {
    const { getByText } = render(<Container>test</Container>);
    expect(getByText('test')).toHaveClass(
      'mx-auto max-w-sm sm:max-w-2xl lg:max-w-5xl px-4',
    );
  });
});
