import React from 'react';
import { connect } from 'react-redux';
import QuickStats from './quickStats';
import Top5Links from './top5Links';
import Top5Overlays from './top5Overlays';
import * as actions from './actions';
import 'styles/dashboard.scss';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getUsage();
    }

    render() {
        return (
            <>
                <div className='flex-y flex cell flex-noshrink flex-grow'>
                    <div className='quick-stats flexible cell-w2'>
                        <QuickStats />
                    </div>
                    <div className='top-usage flexible cell-w5'>
                        <div className='m-5 top-5-links cell flex-grow flex-noshrink'>
                            <Top5Links />
                        </div>
                        <div className='m-5 top-5-overlays cell flex-grow flex-noshrink'>
                            <Top5Overlays />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        getUsage: () => dispatch(actions.onGetUsage()),
    })
)(Dashboard);