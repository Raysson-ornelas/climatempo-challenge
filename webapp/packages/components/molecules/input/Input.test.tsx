import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { SearchInput } from '.';

describe('SearchInput component', () => {
  test('renders a SearchInput with the placeholder search', () => {
    const { getByPlaceholderText } = render(<SearchInput />);
    const input = getByPlaceholderText('Search');
    expect(input).toBeTruthy();
  });
});
