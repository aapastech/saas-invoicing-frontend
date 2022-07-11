import React from 'react';
import { Topbar } from 'blocks';

export default class Topbar extends React.Component {
    state = {
        expanded: true,
    }

    handleContractMenu = e => this.setState({ expanded: false });

    handleExpandMenu = e => this.setState({ expanded: true });

    render() {
        const { expanded } = this.state;
        const width = expanded ? 'thin': 'very thin';
        return (
            <Sidebar items={navigationItems} width={width} onMenuClick={this.handleExpandMenu} />
        );
    }
}