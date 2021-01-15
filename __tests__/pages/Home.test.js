import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages';

it('renders a tree Home', () => {
  const treeH = renderer.create(
    <Home />
  ).toJSON();
    
  expect(treeH).toMatchSnapshot();
});
