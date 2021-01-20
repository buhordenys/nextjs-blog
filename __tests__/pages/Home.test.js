import React from 'react';
import renderer from 'react-test-renderer';
import Home, {getStaticProps} from '../../pages';

describe('test page/index', () => {
  it('renders a tree', () => {
    try {
      const tree = renderer.create(
          <Home/>
          ).toJSON();
      expect(tree).toMatchSnapshot();
    } catch (e) {
      expect(e).toMatch('error');
    }
  })
  it('check initial props', async () => {
    const {props} = await getStaticProps();
    expect(props).toMatchObject({allPostsData: [
        {
          id: 'ssg-ssr',
          title: 'When to Use Static Generation v.s. Server-side Rendering',
          date: '2020-01-02'
        },
        {
          id: 'pre-rendering',
          title: 'Two Forms of Pre-rendering',
          date: '2020-01-01'
        }
      ],
    });
  });
});
