import { render, screen } from '@testing-library/react';
import StandardImageList from './StandardImageList';

describe('StandardImageList', () => {
  it('renders a list of images with alt text', () => {
    render(<StandardImageList />);
    // There are 12 items in itemData
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(12);
    // Check for a specific alt text from the data
    expect(screen.getByAltText('Breakfast')).toBeInTheDocument();
    expect(screen.getByAltText('Bike')).toBeInTheDocument();
  });
});
