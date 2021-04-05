import React from 'react';
import 'styles/userprofile.scss';
import { connect } from "react-redux";
import { Divider, Grid, GridCol, Segment, Header, Link } from 'blocks'
import AccountDetails from './accountDetails';
import EditAccountDetails from './editAccountDetails';
import Membership from './membership';
import * as selectors from './selectors';

class UserProfile extends React.Component {
    render() {
        const { isEditVisible } = this.props;
        return (
            <Segment className='userprofile-container'>
              <Grid columns={2} relaxed='very'>
                <GridCol>
                    { !isEditVisible && <AccountDetails /> }
                    { isEditVisible && <EditAccountDetails /> }
                </GridCol>
                <GridCol>
                    <Membership />
                </GridCol>
              </Grid>
              <Grid columns={2} relaxed='very'>
                <GridCol>
                    <Header>Youtube Link : 
                    </Header>
                    <Link url="https://www.youtube.com/channel/UCLXMT8UMCaG2bsQy_WXaWcw" />
                    <iframe src="https://player.vimeo.com/video/444049293" 
                        width="427" height="240" frameborder="0" allow="autoplay; fullscreen" 
                        allowfullscreen>
                        </iframe>
                </GridCol>
              </Grid>
              <Divider className='fullheight' vertical></Divider>
            </Segment>
        );
    }
}
export default connect(function mapStateToProps(state){
    return {
        isEditVisible: selectors.getIsEditVisible(state),
    }
}, null)(UserProfile)