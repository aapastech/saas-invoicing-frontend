import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Table, Icon } from 'semantic-ui-react';
import 'styles/table.scss';

class TableCell extends React.Component {
    handleOnClick = () => {
        const { column: { row, value, onClick = _.noop } = {} } = this.props;
        onClick(value, row);
    }

    render() {
        const { column: { 
            width, align, value, icon, icons, label = null, color, renderer, row, 
            singleLine = false
        } = {} } = this.props;
        const className = icon ? 'pointer': '';
        let body = null;
        if(renderer) {
            body = renderer(this.props.column, row);
        } else {
            body = (
                <>
                    <div className='text'>{label}</div>
                    &nbsp; 
                    {icon && <Icon className='pointer' name={icon} color={color} />}
                    {_.map(icons, ({ icon, color, onClick = _.noop, link }, key) => {
                        const renderedIcon = (
                            <Icon 
                                onClick={ e => onClick(value, row)} 
                                className='pointer' 
                                key={key} 
                                name={icon} 
                                color={color} 
                            />
                        );
                        if (link) {
                            const { hrefField, target = '' } = link;
                            return (
                                <a href={row[hrefField]} target={target}>{renderedIcon}</a>
                            )
                        }
                        return renderedIcon;
                    })}
                </>
            );
        }
        const tableCellProps = {
            textAlign: align,
            singleLine,
            collapsing: !singleLine,
            className,
            value,
        };
        if (width) tableCellProps.width = width;
        return (
            <Table.Cell onClick={this.handleOnClick} {...tableCellProps}>
                {body}
            </Table.Cell>
        );
    }
}

export default class TableComponent extends React.Component {
    getHeader() {
        const { cols = [] } = this.props;
        
        if (!cols.length) return null;

        return (
            <Table.Header>
                <Table.Row>
                    {_.map(cols, (column, index) => {
                        const {  width = null, align, label = null, singleLine = false } = column;
                        const cellProps = {
                            singleLine,
                            collapsing: !singleLine
                        }
                        if (width) cellProps.width = width;
                        return (
                            <Table.HeaderCell key={index} {...cellProps} textAlign={align}>
                                {label}
                            </Table.HeaderCell>
                        );
                    })}
                </Table.Row>
            </Table.Header>
        );
    }

    getBody() {
        const data = this.getFormattedData();
        const { noRecordsLabel, cols } = this.props;
        if (!data.length) {
            return (
                <Table.Body>
                    <Table.Row>
                        <Table.Cell textAlign='center' colSpan={cols.length}>
                            {noRecordsLabel}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            );
        }
        return (
            <Table.Body>
                {_.map(data, (row, rowIndex) => {
                    return (
                        <Table.Row  key={rowIndex}>
                            {_.map(
                                row, (column, index) => <TableCell column={column} key={index} />
                            )}
                        </Table.Row>
                    )
                })}
            </Table.Body>
        );
    } 

    getFooter() {
        const { footerActions = null, cols } = this.props;
        if (!footerActions) return null;
        return (
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan={cols.length}>
                        {footerActions}
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        );
    }

    getFormattedData() {
        const { data, cols } = this.props;
        return data.map(dataRow => {
            return cols.map(({ labelField, label, valueField, icon, ...otherFields }) => {
                const view = {
                    value: dataRow[valueField],
                    row: dataRow,
                    ...otherFields,
                };
                if (icon) {
                    view.icon = icon;
                } 
                if (labelField) {
                    view.label = dataRow[labelField];
                }
                return view;
            });
        });
    }

    render() {
        return (
            <Table className='scrollable-table' stackable>
                {this.getHeader()}
                {this.getBody()}
                {this.getFooter()}
            </Table>
        );
    }
}

TableComponent.propTypes = {
    cols: PropTypes.arrayOf(
        PropTypes.shape({
            align: PropTypes.string, 
            label: PropTypes.string,
            icon: PropTypes.string,
            color: PropTypes.string,
            valueField: PropTypes.string, 
            labelField: PropTypes.string, 
        })
    ),
    data: PropTypes.array,
    footerActions: PropTypes.any,
    noRecordsLabel: PropTypes.string,
}
TableComponent.defaultProps = {
    noRecordsLabel: 'No Records Found',

}