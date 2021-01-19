import React from 'react';
import renderer from 'react-test-renderer';
import Post from '../../pages/posts/[id]';

describe('test page/posts', () => {
    it('renders a tree Post',  () => {
        try {
            const treeP = renderer.create(
                <Post postData={{title: 'home', date: '2020-01-01', contentHtml: ''}}/>
            ).toJSON();
            expect(treeP).toMatchSnapshot();
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

})

/*

import getStaticPaths from '../../pages/posts/[id]';

it('props getStaticPaths', () => {
        const mockGetStaticProps = jest.fn()
        getStaticPaths(mockGetStaticProps);
        expect(mockGetStaticProps.mock.results).toBe({
            [{params: {id: 'pre-rendering'}}, {params: {id: 'ssg-ssr'}}]
            fallback: false;
        })
    })

 */