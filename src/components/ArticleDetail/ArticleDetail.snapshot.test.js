import React from 'react';
import renderer from 'react-test-renderer';
import { ArticleDetail } from './ArticleDetail';

test('renders ArticleDetail component correctly', () => {
  const props = {
    className: 'your-class-name',
    previewText: 'Your preview text goes here.',
  };

  const component = renderer.create(<ArticleDetail {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
