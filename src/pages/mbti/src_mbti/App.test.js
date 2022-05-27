import { render, screen } from '@testing-library/react';
import MBTI from './MBTI';

test('renders learn react link', () => {
  render(<MBTI />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
