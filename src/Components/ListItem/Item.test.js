import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import modalReducer from "../../Reducers/ModalSlice";
import linksReducer from "../../Reducers/LinksSlice"
import Item from './Item';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('<Item /> unit tests', () => {
    let getWrapper;
    let testLink;
    beforeEach(() => {
        var reducers = combineReducers({
            modal: modalReducer,
            links: linksReducer
        });
        //setModalLink({ id: 0, linkName: "Test Link"  })
        testLink = {
            id: 0,
            linkName: "Test Link Name",
            linkURL: "Test Link URL",
            vote: 5,
            createDate: Date.now(),
            lastVoteDate: Date.now()
        }
        const defaultModal = { link: 0 }
        const defaultLinks = {
            links: [testLink],
            sortProperty: 'createDate',
            reverseSort: false,
            hoveredLinkId: -1
        }
        let props = {
            vote: testLink.vote,
            linkName: testLink.linkName,
            linkURL: testLink.linkURL,
            id: testLink.id,
        };
        var initialState = { modal: defaultModal, links: defaultLinks };
        const mockStore = createStore(reducers, initialState);
        getWrapper = () => mount(
            <Provider store={mockStore}>
                <Item {...props} />
            </Provider>
        );
        return getWrapper;
    });


    it('Should generate the correct link Info', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.linkName .row').text()).toBe(testLink.linkName);
        expect(wrapper.find('.linkURL .row').text()).toBe("(" + testLink.linkURL + "/)");
        expect(wrapper.find('.BoxView_text').text()).toBe(testLink.vote.toString());

    });
    it('Should increase vote', () => {
        const wrapper = getWrapper();
        wrapper.find('.voteButton').first().simulate('click')
        expect(wrapper.find('.BoxView_text').text()).toBe((testLink.vote + 1).toString());
    });
    it('Should decrease vote', () => {
        const wrapper = getWrapper();
        wrapper.find('.voteButton').at(1).simulate('click')
        expect(wrapper.find('.BoxView_text').text()).toBe((testLink.vote - 1).toString());
    });
    it('Should show remove button on hover', () => {
        const wrapper = getWrapper();
        wrapper.find('.Item').first().simulate('mouseEnter')
        expect(wrapper.find('.Item-removeButton').length).toBe(1);
    });
    // it('Should remove itself', () => {
    //     const wrapper = getWrapper();
    //     wrapper.find('.Item').at(0).simulate('mouseEnter')
    //     wrapper.find('.Item-removeButton').simulate('click')
    //     wrapper.find('.RemoveLinkModal button').first().simulate('click')
    //     expect(wrapper.find('.Item').length).toBe(1);
    // });
    // it('Should activate the correct page', () => {
    //     const wrapper = getWrapper();
    //     const newPage = 3
    //     wrapper.find('button').at(newPage).simulate('click');
    //     expect(wrapper.find('.Pagination-activePage').text()).toEqual(newPage.toString())
    // });
});