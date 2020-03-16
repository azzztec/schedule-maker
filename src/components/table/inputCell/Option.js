import React, { Component } from 'react';
import { DriversContext } from '../../Main';

class Option extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DriversContext.Consumer>
                {
                    (drivers) => {
                        return drivers
                                .map((driver,index) => {
                                    return new RegExp(`^${this.props.currentInputValue}`, 'i').test(driver) ? driver : ''
                                })
                                .filter(driver => driver !== '')
                                .map((driver, index) => {
                                    return <div onClick={(event) => this.props.selectOption(event, this.props.place)} className='table__input-option' key={index} data-driver={driver}>{driver}</div>
                                })
                    }
                }
            </DriversContext.Consumer>
        )
    }
}

export default Option;