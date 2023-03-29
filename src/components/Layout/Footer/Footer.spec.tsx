import { render, screen } from '@testing-library/react';

import Footer from './index';

describe('Footer component', () => {
  it('should renders a msg', () => {
    // arrange
    render(<Footer />);

    // act
    const linkEle = screen.getByText('ShineShao');

    // assert
    expect(linkEle).toBeInTheDocument();
  });
});
