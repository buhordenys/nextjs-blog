import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages';

it('renders a tree', () => {
  const tree = renderer.create(
    <Home />
  ).toJSON();
    
  expect(tree).toMatchSnapshot();
});
