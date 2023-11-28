import React from 'react';
import renderer from 'react-test-renderer';
import { ArticleImage } from './ArticleImage';

test('renders ArticleImage component correctly', () => {
  const props = {
    src: 'your-image-src',
    alt: 'your-alt-text',
    imageRef: null, // or provide a valid ref if needed
    photoCaption: 'your-photo-caption',
    figureRef: null, // or provide a valid ref if needed
  };

  const component = renderer.create(<ArticleImage {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
