import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import Sidebar from 'components/sidebar';
import { AppBody, Divider, Header } from 'blocks';
import { redirectTo } from 'modules';

const logo = { src: "/logo.svg" };

export class MainApp extends React.PureComponent {
    handleMenuClick = item => {
        if (item.route) {
            redirectTo(item.route);
        }
    }

    render() {
        const { match, OVERLAY_ENABLED, PAYOUTS_ENABLED } = this.props;
        let menuItems = [{
              label: "Dashboard", icon: "dashboard", route: "/dashboard",
            }, {
              label: "Links", icon: "linkify", route: "/links",
            }, {
              label: "Overlays", icon: "object ungroup outline", route: "/overlays",
            }, {
              bottom: true, label: "Admin", icon: "cogs", route: "/admin",
            }, {
              bottom: true, label: "Profile", icon: "user outline", route: "/user-profile",
            }, {
              bottom: true, label: "Signout", icon: "power off", route: "/logout",
        }];

        let routeLabels = [
          { label: "Dashboard", route: "/dashboard" },
          { label: "Links", route: "/links" },
          { label: "Overlays", route: "/overlays" },
          { label: "New Overlay", route: "/overlays/new" },
          { label: "Profile", route: "/user-profile" },
          { label: "Admin", route: "/admin" },
        ];

        menuItems = _.reject(menuItems, ({ label }) => {
          if (Boolean(label === 'Overlays' && !OVERLAY_ENABLED)) return true;
          if (Boolean(label === 'Admin' && !PAYOUTS_ENABLED)) return true;
          return false;
        });

        routeLabels = _.reject(routeLabels, ({ label }) => {
          if (Boolean(label === 'Overlays' && !OVERLAY_ENABLED)) return true;
          if (Boolean(label === 'New Overlay' && !OVERLAY_ENABLED)) return true;
          if (Boolean(label === 'Admin' && !PAYOUTS_ENABLED)) return true;
          return false;
        });

        const loadedRouteComponent = _.find(menuItems, ({ route }) => _.startsWith(match.path, route));
        if (loadedRouteComponent) {
          loadedRouteComponent.active = true;
        }

        const routeLabel = _.find(routeLabels, { route: match.path });
        return (
            <>
                <Sidebar logo={logo} menuItems={menuItems} onItemClick={this.handleMenuClick} />
                <AppBody>
                  {routeLabel && (
                    <>
                      <Header as='h2'>{routeLabel.label}</Header>
                      <Divider />
                    </>
                  )}
                  {this.props.children}
                </AppBody>
            </>
        );

    }
}

MainApp.propTypes = {
  OVERLAY_ENABLED: PropTypes.bool,
  PAYOUTS_ENABLED: PropTypes.bool,
};

MainApp.defaultProps = {
  OVERLAY_ENABLED: false,
  PAYOUTS_ENABLED: false,
};

export default withRouter(MainApp);
