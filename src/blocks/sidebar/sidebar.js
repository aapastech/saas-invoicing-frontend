import React from 'react';
import _ from 'lodash';
import { Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';

import ComponentWrapper from 'utils/helper';

const defaults = {
    as: Menu,
    vertical: true,
    animation: 'overlay',
    inverted: true,
    visible: true,
    width: 'thin',
};

function MenuItem(props) {
    const { item, className = '' } = props;
    const isImage = item.as === 'Image';
    const clickHandler = item.onClick || _.noop;
    if (isImage) {
        return (
            <Menu.Item className={className} onClick={clickHandler}>
                <Image centered src={item.src} size='tiny' />
            </Menu.Item>
        );
    }
    return (
        <Menu.Item className={className} active={item.active} onClick={clickHandler}>
            {item.icon && <Icon name={item.icon} />}
            {item.label}
        </Menu.Item>
    );
}


export const SidebarBlock = ComponentWrapper(Sidebar, defaults);
export const SidebarPushable = ComponentWrapper(Sidebar.Pushable, { as: Segment });
export const SidebarPusher = ComponentWrapper(Sidebar.Pusher);
export class SidebarCombined extends React.Component {
    render() {
        const { visible: v, animation: a } = defaults;
        const { 
            items, children, applicationContent, visible=v, animation=a,
            onMenuClick, expanded
        } = this.props;
        const content = children || applicationContent;
        const sidebarProps = {
            visible,
            animation,
            onClick: onMenuClick
        };
        if (!expanded) {
            return <CollapsedSidebarMenu {...sidebarProps} />
        }
        return (
            <SidebarPushable>
                <SidebarBlock {...sidebarProps}>
                    {_.map(items, item => <MenuItem item={item} />)}
                </SidebarBlock>
                {content && (
                    <SidebarPusher dimmed={visible}>
                        <Segment basic>
                            {content}
                        </Segment>
                    </SidebarPusher>
                )}
            </SidebarPushable>
        );
    }
}

function CollapsedSidebarMenu(props) {
    return (
        <SidebarPushable>
            <SidebarBlock { ...{...props, width: 'very thin' } }>
                <MenuItem className='bottom-sidebar-menu-item' item={{ icon: 'arrow alternate circle right' }} />)}
            </SidebarBlock>
        </SidebarPushable>
    )
}
