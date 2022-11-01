import { render } from '@testing-library/react';

import '@testing-library/jest-dom/';
import { ForecastItem } from '.';

describe('ForecastItem component', () => {
  test('renders a ForecastItem with the test text', () => {
    const { getByText } = render(<ForecastItem>test</ForecastItem>);
    const forecastItem = getByText('test');
    expect(forecastItem).toBeTruthy();
    expect(forecastItem).toHaveClass('flex items-center gap-10 sm:gap-6');
  });
});
