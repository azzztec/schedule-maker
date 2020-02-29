import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from './commonMethods/toggleInputPanel';

class DeleteCarBtn extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInputsPanel = toggleInputsPanel.bind(this);
        this.closeInputsPanel = closeInputsPanel.bind(this);
        this.deleteCar = this.deleteCar.bind(this);

        this.panel = React.createRef();
    }

    deleteCar(event) {
        const carNumberToDelete = event.target.dataset.carNumber;
        this.props.deleteCar(carNumberToDelete);
    }

    render() {
        return (
            <div className='car-controls__delete car-delete'>
                <button className='car-delete__btn main-btn' onClick={this.toggleInputsPanel} >- Удалить машину</button>
                <div className='car-delete__delete-panel panel' ref={this.panel}>
                    {this.props.cars.map((car, index) => {
                        return <div className='car-delete__number' onClick={event => this.deleteCar(event)} key={index} data-car-number={car.number}>{car.number}</div>
                    })}
                    <button className='car-delete__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                </div>
            </div>
        )
    }
}

export default DeleteCarBtn;