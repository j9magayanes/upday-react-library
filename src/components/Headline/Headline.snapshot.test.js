import React from 'react';
import renderer from 'react-test-renderer';
import { Headline } from './Headline';

test('renders Headline component correctly', () => {
  const props = {
    args: {
      headline: 'Your headline text here',
      // Add other required properties as needed
    },
  };

  const component = renderer.create(<Headline {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
