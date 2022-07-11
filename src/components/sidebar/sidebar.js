import React from "react";
import _ from "lodash";

import { Sidebar } from "blocks";
import "styles/sidebar.scss";

export default class SidebarComponent extends React.Component {
  render() {
    const { menuItems, logo, onItemClick = _.noop } = this.props;

    return (
      <Sidebar logo={logo} menuItems={menuItems} onItemClick={onItemClick} />
    );
  }
}
