import React, { Component } from 'react';
import InputCell from './inputCell/InputCell';
import DateCell from './dateCell/DateCell';


class TableCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td className='table__cell'>
                {
                    this.props.type == 'data/cars' ? <span className='table__datecars-cell'>DATE\CARS</span> 
                    : 
                        this.props.type == 'data' ? <DateCell startDate={this.props.startDate} setStartDate={this.props.setStartDate} index={this.props.index}/> 
                        : 
                            this.props.type == 'car' ? <span className='table__number-cell'>{this.props.number}</span> : <InputCell rowIndex={this.props.rowIndex} cellIndex={this.props.cellIndex} />
                }
            </td>
        )
    }
}

export default TableCell;