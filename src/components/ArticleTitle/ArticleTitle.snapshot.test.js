import React from 'react';
import renderer from 'react-test-renderer';
import { ArticleTitle } from './ArticleTitle';

test('renders ArticleTitle component correctly', () => {
  const props = {
    title: 'Your Title',
    className: 'your-class-name',
    id: 'your-id',
  };

  const component = renderer.create(<ArticleTitle {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
