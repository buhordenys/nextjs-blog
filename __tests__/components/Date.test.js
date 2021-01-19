import React from 'react';
import renderer from 'react-test-renderer';
import Date from '../../src/components/Date/date';

describe('Test Components/Date', () => {
    it('Snapshot', () => {
        const snapshot = renderer.create(
            <Date dateString={'2020-11-11'}/>
        ).toJSON()

        expect(snapshot).toMatchSnapshot()
    })

});
