import React from 'react';
import renderer from 'react-test-renderer';
import { HeroImage } from './HeroImage';

test('renders HeroImage component correctly', () => {
  const props = {
    args: {
      class: 'your-class',
      src: 'your-image-src.jpg',
      shortTitle: 'Short Title',
      imageRef: null, // Replace with actual value if needed
      photoCredits: 'Photo Credits',
      // Add other required properties as needed
    },
  };

  const component = renderer.create(<HeroImage {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
