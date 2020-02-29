import React, { Component } from 'react';
import TableRow from './TableRow'

class Table extends React.Component{
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <table className='table'>
                <tbody className='table__body'>
                    {
                        this.props.rowsAmount.map((item, index) => {
                            return <TableRow index={index} key={index} cars={this.props.cars}/>
                        })
                        
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;