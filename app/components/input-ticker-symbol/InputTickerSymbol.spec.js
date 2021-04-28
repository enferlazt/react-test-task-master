import { mount, shallow } from 'enzyme';
import React from 'react';
import InputTickerSymbol from './InputTickerSymbol';
import '../../../setupTests';

const setUp = () => shallow(<InputTickerSymbol/>);

describe("InputTickerSymbol component", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it("render component", () => {
        expect(component).toMatchSnapshot();
    });

    it("ticker symbol search input", () => {
        const setInputFieldMock = jest.fn();
        const event = {
            target: { value: 'test' }
        };
        const component = mount(<InputTickerSymbol setInputField={setInputFieldMock} />);
        component.find('.ticker-input-block__input').simulate('change', event);
        expect(setInputFieldMock).toHaveBeenCalledWith('test');
    });
})