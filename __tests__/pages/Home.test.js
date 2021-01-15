import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages';
import Post from "../../pages/posts/[id]";

it('renders a tree Home', () => {
  const treeH = renderer.create(
    <Home />
  ).toJSON();
    
  expect(treeH).toMatchSnapshot();
});

it('renders a tree Post', async () => {
  try {
    const treeP = await renderer.create(
        <Post/>
    ).toJSON();
    expect(treeP).toMatchSnapshot();
  } catch(e) {
    expect(e).toMatch(`error`);
  }
});
