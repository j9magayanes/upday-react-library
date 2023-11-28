import React from 'react';
import renderer from 'react-test-renderer';
import { FullText } from './FullText';

test('renders FullText component correctly', () => {
  const props = {
    title: 'Example Title',
    fulltext: 'This is the full text content.',
  };

  const component = renderer.create(<FullText {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
