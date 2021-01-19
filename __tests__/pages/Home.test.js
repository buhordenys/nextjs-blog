import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages';

describe('test page/index', () => {
  it('renders a tree', () => {
    const tree = renderer.create(
        <Home />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('')
})
