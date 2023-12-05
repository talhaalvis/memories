import { render, screen } from '@testing-library/react';

import Form from './components/Form/Form';

test('renders learn react link', () => {
  render(<Form/>);
 
  const checkInput = screen.getByRole('textbox');
  expect(checkInput).toHaveAttribute('name','title');
});
