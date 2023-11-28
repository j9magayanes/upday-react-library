import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './Header';

test('renders Header component correctly', () => {
  const props = {
    user: {
      // Provide user data here
    },
    onLogin: jest.fn(),
    onLogout: jest.fn(),
    onCreateAccount: jest.fn(),
  };

  const component = renderer.create(<Header {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
