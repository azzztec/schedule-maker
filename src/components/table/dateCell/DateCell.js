import React, { Component } from 'react';
import {setDate, setWeekDate} from '../../commonMethods/setDate';



class DateCell extends React.Component {
    constructor(props) {
        super(props)

        this.inputDateRef = React.createRef()
    }

    render() {
        return (
            <>
                {
                    this.props.index == 1 ? 
                        <>
                            <input className='table__input-cell' ref={this.inputDateRef} type="date" value={this.props.startDate} onChange={(event) => this.props.setStartDate(event)}/>
                            <span className={'table__date-cell week-cell'}>{setWeekDate(this.props.startDate, this.props.index)}</span>
                        </>
                        :
                        <>
                            <span className='table__date-cell'>{setDate(this.props.startDate, this.props.index)}</span>
                            <span className={'table__date-cell week-cell'}>{setWeekDate()}</span>
                        </>
                }
            </ >
        )
    }
}

export default DateCell