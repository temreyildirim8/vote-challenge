import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import linksReducer from "../../Reducers/LinksSlice"
import paginationReducer from "../../Reducers/PaginationSlice"
import { createStore, combineReducers } from '@reduxjs/toolkit';
import TestLinks from '../../Resources/TestLinks'
import ListView from './ListView';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<List /> unit tests', () => {

    var reducers = combineReducers({
        pagination: paginationReducer,
        links: linksReducer
    });
    const defaultPagination = { page: 1 }
    const defaultLinks = {
        links: TestLinks,
        sortProperty: 'createDate',
        reverseSort: false,
        hoveredLinkId: -1
    }
    var initialState = { pagination: defaultPagination, links: defaultLinks };
    const mockStore = createStore(reducers, initialState);

    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <ListView />
        </Provider>
    );

    it('Should generate the correct number of items', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.Item').length).toBe(5);
    });

});