import React, { Component } from 'react';
import Input from './input/Input';

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
                        this.props.type == 'data' ? <span table='table__date-cell'>01.03</span> 
                        : 
                            this.props.type == 'car' ? <span className='table__number-cell'>{this.props.number}</span> : <Input />
                }
            </td>
        )
    }
}

export default TableCell;