import { render, screen } from '@testing-library/react';
import React from 'react';

function HelloWorld() {
  return <div>Hello, World!</div>;
}

describe('HelloWorld', () => {
  it('renders greeting', () => {
    render(<HelloWorld />);
    expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
  });
});