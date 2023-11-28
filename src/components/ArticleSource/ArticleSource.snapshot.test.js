import React from 'react';
import renderer from 'react-test-renderer';
import { ArticleSource } from './ArticleSource';

test('renders ArticleSource component correctly', () => {
  const props = {
    className: 'your-class-name',
    text: 'your-text',
  };

  const component = renderer.create(<ArticleSource {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
