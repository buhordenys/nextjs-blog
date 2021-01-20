import React from 'react';
import renderer from 'react-test-renderer';
import Blogs, {getStaticProps} from '../../src/components/Blogs/Blogs';


describe('test components/Blogs', () => {
    it('snapshot Blogs', () => {
        const snapshotBlogs = renderer.create(
            <Blogs allPostsData={[
                { id: 'ilon', title: 'Musk', date: '1991-05-05' },
                { id: 'tttt', title: 'yyyy',date: '1001-01-05' }
            ]}/>
        )
        expect(snapshotBlogs).toMatchSnapshot()
    });
    it('check initial props', async () => {
        const {props} = await getStaticProps();
        expect(props).toMatchObject({
            allPostsData: [
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
