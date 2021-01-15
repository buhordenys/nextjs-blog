import React from 'react';
import renderer from "react-test-renderer";
import Post from "../../src/components/Posts/[id]";

it('renders a tree Post',  () => {
    try {
        const treeP = renderer.create(
            <Post/>
        ).toJSON();
        expect(treeP).toMatchSnapshot();
    } catch (e) {
        expect(e).toMatch('error');
    }
});
