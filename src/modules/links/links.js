import React from 'react';
import _ from 'lodash';
import LinksList from 'components/links';
import { Icon } from 'semantic-ui-react';

export default class Links extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', 
            label: 'Short URL', 
            valueField: 'id', 
            labelField: 'shortUrl',
            singleLine: true,
            width: 5,
            icons: [
                {
                    icon: 'copy', 
                    color: 'grey' ,
                    onClick: this.onCopy
                }, {
                    icon: 'external alternate',
                    color: 'grey',
                    link: {
                        hrefField: 'shortUrl', 
                        target: '_blank',
                    },
                }
            ], 
        }, { 
            align: 'left', label: 'Overlay used', valueField: 'id', labelField: 'overlayName', width: 4 
        }, { 
            align: 'left', label: 'Created On', valueField: 'id', labelField: 'createdOn'
        }, { 
            align: 'left', 
            label: 'Target URL', 
            valueField: 'id', 
            labelField: 'targetUrl', 
            renderer: this.renderTargetUrl,
        }, { 
            align: 'right', 
            label: 'Actions', 
            valueField: 'id',
            icons: [
                {
                    icon: 'edit', 
                    color: 'grey',
                },
                {
                    icon: 'delete', 
                    color: 'red',
                }
            ]
        }];
    }
    

    componentDidMount() {
        this.props.onFetchLinks();
    }

    onCopy = (col, rowData) => {

    };

    renderTargetUrl = (col, rowData) => {
        return (
            <div className='text'>
                <a href={col.label} target='_blank'>{col.label}</a>
            </div>
        );
    }

    render() {
        const { data } = this.props;
        return (
            <>
               <LinksList cols={this.cols} data={data} /> 
            </>
        );
    }
}