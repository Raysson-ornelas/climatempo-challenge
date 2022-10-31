import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ForecastLine } from '.';

describe('ForecastLine component', () => {
  test('render a ForecastLine with a test text', () => {
    const { getByText } = render(<ForecastLine>test</ForecastLine>);
    const forecastLine = getByText('test');
    expect(forecastLine).toBeTruthy();
    expect(forecastLine).toHaveClass('grid grid-cols-2');
  });
});
