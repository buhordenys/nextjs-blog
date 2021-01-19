import React from 'react';
import renderer from 'react-test-renderer';
import Blogs from '../../src/components/Blogs/Blogs';

describe('test components/Blogs', () => {
    it('snapshot Blogs', () => {
        const snapshotBlogs = renderer.create(
            <Blogs allPostsData={[{ id: 'Ilon', date: '1991-05-05', title: 'Musk' }]}/>
        )
        expect(snapshotBlogs).toMatchSnapshot()
    })

});
