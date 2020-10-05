import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import paginationReducer from "../../Reducers/PaginationSlice";
import linksReducer from "../../Reducers/LinksSlice"
import Pagination from './Pagination';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<Pagination /> unit tests', () => {

    var reducers = combineReducers({
        pagination: paginationReducer,
        links: linksReducer
    });
    const defaultPagination = { page: 0 }
    const defaultLinks = {
        links: [...Array(22)],
        sortProperty: 'createDate',
        reverseSort: false,
        hoveredLinkId: -1
    }
    var initialState = { pagination: defaultPagination, links: defaultLinks };
    const mockStore = createStore(reducers, initialState);
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Pagination />
        </Provider>
    );

    it('Should generate the correct number of pages', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('button')).toHaveLength(7);
    });
    it('Should activate the correct page', () => {
        const wrapper = getWrapper();
        const newPage = 3
        wrapper.find('button').at(newPage).simulate('click');
        expect(wrapper.find('.Pagination-activePage').text()).toEqual(newPage.toString())
    });
});