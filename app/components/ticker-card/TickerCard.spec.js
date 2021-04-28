import { shallow } from 'enzyme';
import React from 'react';
import '../../../setupTests';
import TickerCard from './TickerCard';

describe("TickerCard component", () => {
    it("render component", () => {
        const component = shallow(<TickerCard/>);
        expect(component).toMatchSnapshot();
    });
});