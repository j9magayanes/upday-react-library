import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

describe('Header', () => {
  it('renders Header', () => {
    const { container } = render(<Header />);
    const headerDetail = container.getElementsByClassName('header_header')[0];
    expect(headerDetail).toBeInTheDocument();
  });
});
