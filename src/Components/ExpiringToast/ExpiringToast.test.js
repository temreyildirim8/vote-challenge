import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import toastReducer from "../../Reducers/ToastSlice"
import ExpiringToast from './ExpiringToast';


Enzyme.configure({ adapter: new EnzymeAdapter() });
const args = [
    [
        "removed",
        "Test Link",
        true
    ],
    [
        "added",
        "Test Link",
        false
    ]
]

describe('<ExpiringToast /> unit tests', () => {

    it.each(args)('Should show correct link name', (name, linkName, removedOrAdded) => {
        const mockStore = createStore(toastReducer, { toast: { linkName: linkName, removedOrAdded: removedOrAdded } });
        const getWrapper = () => mount(
            <Provider store={mockStore}>
                <ExpiringToast />
            </Provider>
        );
        const wrapper = getWrapper();
        expect(wrapper.find('.toast-body').text()).toBe(
            linkName +
            " " +
            (removedOrAdded ? "removed" : "added") +
            "."
        );
    });



});