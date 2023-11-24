// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Footer
        args={{
          items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
        }}
      />
    );

    // Query the list-component by tag name
    const listComponent = container.querySelector('list-component');

    // Check if the list-component exists
    expect(listComponent).toBeInTheDocument();
  });
});
