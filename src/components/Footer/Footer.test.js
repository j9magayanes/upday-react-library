// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Footer} from './Footer.jsx';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer args={{items: [{name: "test", callback:"", href:""}]}}/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Copyright 2023, upday GmbH & Co. KG')).toBeInTheDocument();
  });
});
