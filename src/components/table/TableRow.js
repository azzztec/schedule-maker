import React, { Component } from 'react';
import TableCell from './TableCell';

class TableRow extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <tr className='table__row'>
                {
                    this.props.index == 0 ?
                        this.props.cars.map((item, index) => {
                            return index == 0 ? <TableCell key={index} type='data/cars' /> : <TableCell key={index} make={this.props.cars[index - 1].make} number={this.props.cars[index - 1].number} type='car' />
                        })
                    :
                        this.props.cars.map((item, index) => {
                            return index == 0 ? <TableCell startDate={this.props.startDate} setStartDate={this.props.setStartDate} index={this.props.index} key={index} type='data' /> : <TableCell cellIndex={index} rowIndex={this.props.rowIndex} key={index} type='driver' />
                        })

                }
            </tr>
        )
    }
}

export default TableRow;