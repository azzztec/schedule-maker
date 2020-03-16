import React from 'react';
import Table from './table/Table';
import Header from './header/Header';
import {closeInputPanels} from './commonMethods/closeInputPanel'
import {saveInStorage, getFromStorage} from './saveInStorage'

export const DriversContext = React.createContext();

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.addCar = this.addCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
        this.addDriver = this.addDriver.bind(this);
        this.deleteDriver = this.deleteDriver.bind(this);

        this.state = {
            cars: getFromStorage("cars"),
            drivers: getFromStorage("drivers"),
            rowsAmount: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        };
        this.addCar = this.addCar.bind(this);
    }

    addDriver(newDriver) {
        let driversCopy = this.state.drivers.slice();
        driversCopy.push(newDriver);
        this.setState({
            drivers: driversCopy
        })
    }

    deleteDriver(driverToDelete) {
        let driversCopy = this.state.drivers.slice();
        driversCopy.splice(driversCopy.indexOf(driverToDelete), 1);
        this.setState({
            drivers: driversCopy
        })
    }

    addCar(newCar) {
        this.setState({
            cars: [newCar, ...this.state.cars]
        })
    }

    deleteCar(carNumberToDelete) {
        let carsCopy = this.state.cars.slice();
        for(let i = 0; i < carsCopy.length; i++) {
            if(carsCopy[i].number == +carNumberToDelete) {
                carsCopy.splice(i, 1);
                break;
            }
        }
        this.setState({
            cars: [...carsCopy]
        })
    }

    componentDidUpdate() {
        saveInStorage('cars', JSON.stringify(this.state.cars))
        saveInStorage("drivers", this.state.drivers);
        getFromStorage("drivers");
        getFromStorage("cars");
    }

    render() {
        return (
            <DriversContext.Provider value={this.state.drivers}>
                <div className='main'>
                    <Header drivers={this.state.drivers} deleteDriver={this.deleteDriver} addDriver={this.addDriver} cars={this.state.cars} deleteCar={this.deleteCar} addCar={this.addCar}/>
                    <Table cars={this.state.cars} rowsAmount={this.state.rowsAmount}/>
                </div>
            </DriversContext.Provider>
        )
    }
}

document.addEventListener('click', closeInputPanels);

export default Main;