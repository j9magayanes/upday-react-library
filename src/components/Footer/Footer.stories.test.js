import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Footer.stories';

const { Default } = composeStories(stories);

test('renders Footer component with correct class', () => {
    const {container}  =render(<Default />);
    const element = container.querySelector('list-component')
    expect(element).toBeInTheDocument();
    const footerAttribute = element.getAttribute('items');
    expect(footerAttribute).toBe('[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]');
  });