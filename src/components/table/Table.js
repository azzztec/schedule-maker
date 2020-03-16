import React, { Component } from 'react';
import TableRow from './TableRow';
import {saveInStorage, getFromStorage} from '../saveInStorage';

class Table extends React.Component{
    constructor(props) {
        super(props);

        this.setStartDate = this.setStartDate.bind(this)

        this.state = {
            startDate: getFromStorage("date")
        }
    }
    
    setStartDate(event) {
        console.log(event.target)
        this.setState({
            startDate: event.target.value
        })
    }

    componentDidUpdate() {
        saveInStorage("date", this.state.startDate);
    }

    render() {
        return (
            <table className='table'>
                <tbody className='table__body'>
                    {
                        this.props.rowsAmount.map((item, index) => {
                            return <TableRow startDate={this.state.startDate} setStartDate={this.setStartDate} rowIndex={index} index={index} key={index} cars={this.props.cars}/>
                        })
                        
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;