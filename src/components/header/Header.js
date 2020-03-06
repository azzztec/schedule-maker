import React, { Component } from 'react';
import AddCarBtn from './buttons/AddCar';
import DeleteCarBtn from './buttons/DeteleCar';
import AddDriverBtn from './buttons/AddDriver';
import DeleteDriverBtn from './buttons/DeleteDriver';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className='header__controls control-panels'>
                    <AddCarBtn addCar={this.props.addCar} />
                    <DeleteCarBtn deleteCar={this.props.deleteCar} cars={this.props.cars}/>
                    <AddDriverBtn addDriver={this.props.addDriver} />
                    <DeleteDriverBtn deleteDriver={this.props.deleteDriver} drivers={this.props.drivers} />
                </div>
            </div>
        )
    }
}

export default Header;