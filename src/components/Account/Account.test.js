import React from 'react'
import ReactRender from 'react-test-renderer'

import { mockFriends, eventMock, window } from '../__mocks__/components'
import ManagementAccount from './ManagementAccount.jsx'
import Account from './Account.jsx'

const onAddFriend = jest.fn(friend => ({friend}));
global.window = window;
const propsAccountComponent = {
    onAddFriend: friend => {onAddFriend(friend)},
    user: {
        ...mockFriends[0],
        name: 'renato',
        friends: window.INITIAL_STATE.friends
    }
};

const createComponent = (props={}) => ReactRender.create(
    <Account {...props} />
);

const AccountComponent = createComponent(propsAccountComponent);

const component = AccountComponent.toJSON();
const header = component.children[0];
const content = component.children[1];
const buttons = content.children[1];

describe('Component: Account', () => {
    test('renders without crash', () => {
        expect(component).toMatchSnapshot();
     });

    test('renders the popup opened with account configurations', () => {
        const icon = header.children[1];
        icon.props.onClick(eventMock);
        expect(AccountComponent.toJSON()).toMatchSnapshot();
    });

    describe('onBackHome', () => {
        const openNotificationsButton = buttons.children[2];
        const onBackHomeButton = buttons.children[0];
        test('renders the image user user with details popup', () => {
            openNotificationsButton.props.onClick(eventMock);
            onBackHomeButton.props.onClick(eventMock);
            expect(AccountComponent.toJSON()).toMatchSnapshot();
        });
    });

    describe('openSolicitationsFriends', () => {
        const openSolicitationsFriends = buttons.children[1];
        beforeEach(() => {
            openSolicitationsFriends.props.onClick(eventMock);
        });

        test('renders the solicitations of friendship', () => {
            expect(AccountComponent.toJSON()).toMatchSnapshot();
        });

        test('renders the solicitations of friendship closed before was opened', () => {
            openSolicitationsFriends.props.onClick(eventMock);
            expect(AccountComponent.toJSON()).toMatchSnapshot();
        });
    });

    describe('openNotifications', () => {
        const openNotificationsButton = buttons.children[2];
        beforeEach(() => {
            openNotificationsButton.props.onClick(eventMock);
        });

        test('renders the notifications that should be open', () => {
            expect(AccountComponent.toJSON()).toMatchSnapshot();
        });

        test('renders the notifications closed when before was opened', () => {
            openNotificationsButton.props.onClick(eventMock);
            expect(AccountComponent.toJSON()).toMatchSnapshot();
        });
    });

    describe('onUpdateContent', () => {
        const AccountComponent = new Account(propsAccountComponent);
        const setStateMock = jest.fn(AccountComponent.setState);
        const mockOnUpdateContent = jest.fn(AccountComponent.onUpdateContent);
        const ManagementAccountComponent = new ManagementAccount({
            onUpdateContent: mockOnUpdateContent
        });

        const content = <p>Hello world</p>;
        beforeEach(() => {
            ManagementAccountComponent.onChangeContent(content);
        });

        test('should update content in account from click into management account', () => {
            expect(mockOnUpdateContent).toHaveBeenCalledWith(content);
        });

        test('should not update with content in account from click into management', () => {
            mockOnUpdateContent.mockClear();
            ManagementAccountComponent.onChangeContent();
            expect(mockOnUpdateContent).toHaveBeenCalledWith(undefined);
            expect(setStateMock).not.toHaveBeenCalled();
        });
    });

    describe('onApproveFriend', () => {
        jest.useFakeTimers();
        const accountComponent = new Account(propsAccountComponent);
        const AccountState = accountComponent.state;
        const openSolicitationsFriends = buttons.children[1];

        const getCard = component =>
            component.children[1].children[0].children[0];
        const getApproveButton = card =>
            card.children[1].children[0].children[0];

        beforeEach(() => {
            openSolicitationsFriends.props.onClick(eventMock);
            const component = AccountComponent.toJSON();
            const card = getCard(component);
            const approve = getApproveButton(card);
            approve.props.onClick(eventMock);
            jest.runAllTimers();
        });

        test('should add friend to user list friends', () => {
            expect(onAddFriend).toHaveBeenCalledWith(
                AccountState.solicitations.friends[0]
            );
            expect(AccountComponent.toJSON()).toMatchSnapshot();
        });

        afterEach(() => {
            onAddFriend.mockClear();
            jest.clearAllTimers();
        });
    });
});
