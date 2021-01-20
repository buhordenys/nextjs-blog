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
        const {props} = await getStaticProps({ params: { id: 'pre-rendering' } });
        expect(props).toMatchObject({
           postData: {
               id: 'pre-rendering',
               contentHtml: '<p>Next.js has two forms of pre-rendering: <strong>Static Generation</strong> and <strong>Server-side Rendering</strong>. The difference is in <strong>when</strong> it generates the HTML for a page.</p>\n'+
                    '<ul>\n' +
                    '<li><strong>Static Generation</strong> is the pre-rendering method that generates the HTML at <strong>build time</strong>. The pre-rendered HTML is then <em>reused</em> on each request.</li>\n' +
                    '<li><strong>Server-side Rendering</strong> is the pre-rendering method that generates the HTML on <strong>each request</strong>.</li>\n' +
                    '</ul>\n' +
                    '<p>Importantly, Next.js lets you <strong>choose</strong> which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.</p>\n',
               title: 'Two Forms of Pre-rendering',
               date: '2020-01-01'
           }
        });
    });
});
