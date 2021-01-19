import React from 'react';
import renderer from 'react-test-renderer';
import Date from '../../src/components/Date/date';
import {format, parseISO} from "date-fns";

describe('Test Components/Date', () => {
    it('Snapshot', () => {
        const snapshot = renderer.create(
            <Date dateString={'2020-11-11'}/>
        ).toJSON()

        expect(snapshot).toMatchSnapshot()
    })

    it('Date', () => {
        const date = '1999-05-05'
        const root = renderer.create(
            <Date dateString={date}/>
        ).root
        const timeElement = root.findByType('time')


        expect(root.textContent).toBe(format(parseISO(date), 'LLL d, yyyy'))
    })
});
