import React from 'react';
import { render } from '@testing-library/react';
import { Meinestadt, Web } from './Ad.stories';

describe('Ad Stories', () => {
  it('renders Meinestadt story', () => {
    const { getByText } = render(<Meinestadt />);

    expect(getByText('Story continues below advertisement')).toBeInTheDocument();
    // ... add more assertions as needed
  });

  it('renders Web story', () => {
    const { getByText } = render(<Web />);
    expect(getByText('Story continues below advertisement')).toBeInTheDocument();
    // ... add more assertions as needed
  });
});
