import { render } from '@testing-library/react';
import Element from './Element';

test('renders learn react link', () => {
  const element = render(<Element />);
  expect(element).toBe('Element');
});
