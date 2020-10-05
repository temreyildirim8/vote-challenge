import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import BoxView from './BoxView';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<BoxView /> unit tests', () => {


    const getWrapper = () => mount(
        <BoxView text="54" subText="POINTS" />
    );

    it('Should generate the correct text', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.BoxView_text').text()).toBe("54");
    });
    it('Should activate the correct sub text', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('div').at(2).text()).toBe("POINTS");
    });
});