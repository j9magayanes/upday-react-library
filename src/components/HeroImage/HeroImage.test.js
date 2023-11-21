// HeroImage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {HeroImage} from './HeroImage';

describe('HeroImage Component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<HeroImage args={{class: "meinestadt"}} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByRole('img')).toBeInTheDocument();
  });
});
