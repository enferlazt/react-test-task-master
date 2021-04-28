import { shallow } from 'enzyme';
import React from 'react';
import NoContent from './NoContent';
import '../../../setupTests';

describe("NoContent component", () => {
    it("render component", () => {
        const component = shallow(<NoContent/>);
        expect(component).toMatchSnapshot();
    });
});