import React from 'react';
import renderer from 'react-test-renderer';
import { ArticlePage } from './ArticlePage';

test('renders ArticlePage component correctly', () => {
  const props = {
    primary: true,
    backgroundColor: 'your-background-color',
    size: 'your-size',
    label: 'your-label',
    title: 'your-title',
    appName: 'your-appName',
    src: 'your-image-src',
    args: { /* your args object */ },
  };

  const component = renderer.create(<ArticlePage {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
