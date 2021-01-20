import React from 'react';
import renderer from 'react-test-renderer';
import Post, {getStaticPaths, getStaticProps} from '../../pages/posts/[id]';

describe('test page/posts', () => {
    it('renders a tree Post', () => {
        try {
            const treeP = renderer.create(
                <Post postData={{title: 'home', date: '2020-01-01', contentHtml: ''}}/>
            ).toJSON();
            expect(treeP).toMatchSnapshot();
        } catch (e) {
            expect(e).toMatch('error');
        }
    });
    it('check initial props', async () => {
        const props = await getStaticPaths();
        expect(props).toMatchObject({
            paths: [{params: {id: 'pre-rendering'}}, {params: {id: 'ssg-ssr'}}],
            fallback: false
        })
    });
    it('check initial props', async () => {
        const {props} = await getStaticProps({ params: { id: 'ssg-ssr' } });
        expect(props).toMatchObject({
           postDate: {
                id: 'ssg-ssr',
                contentHtml: '<p>We recommend using <strong>Static Generation</strong> (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.</p>\n' +
                    '<p>You can use Static Generation for many types of pages, including:</p>\n' +
                    '<ul>\n' +
                        '<li>Marketing pages</li>\n' +
                        '<li>Blog posts</li>\n' +
                        '<li>E-commerce product listings</li>\n' +
                        '<li>Help and documentation</li>\n' +
                    '</ul>\n' +
                    `<p>You should ask yourself: "Can I pre-render this page <strong>ahead</strong> of a user's request?" If the answer is yes, then you should choose Static Generation.</p>\n` +
                    "<p>On the other hand, Static Generation is <strong>not</strong> a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.</p>\n" +
                    '<p>In that case, you can use <strong>Server-Side Rendering</strong>. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.</p>\n',
                title: 'When to Use Static Generation v.s. Server-side Rendering',
                date: '2020-01-02'
            }
        });
    });
});
