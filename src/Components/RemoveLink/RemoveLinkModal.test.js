import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import modalReducer from "../../Reducers/ModalSlice"
import RemoveLinkModal from './RemoveLinkModal';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<RemoveLinkModal /> unit tests', () => {


    const defaultModal = { id: 0, linkName: "Test Link" }
    var initialState = { link: defaultModal };
    const mockStore = createStore(modalReducer, { modal: initialState });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <RemoveLinkModal />
        </Provider>
    );

    it('Should show correct link name', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.LinkName .modal-body').text()).toBe(defaultModal.linkName);
    });
});