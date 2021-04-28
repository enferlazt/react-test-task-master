import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import '../../setupTests';

describe("App component", () => {
    it("render component", () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});
