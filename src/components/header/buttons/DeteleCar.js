import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from '../../commonMethods/toggleInputPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
            <div className='car-controls__delete input-field'>
                <button className='car-delete__btn main-btn' onClick={this.toggleInputsPanel} >- Удалить машину</button>
                <div className='car-delete__delete-panel panel' ref={this.panel}>
                    <div className='panel__delete-container'>
                        {this.props.cars.map((car, index) => {
                            return car.number && <div className='panel__delete-option' onClick={event => this.deleteCar(event)} key={index} data-car-number={car.number}>
                                                    <span className='panel__delete-item' data-car-number={car.number}>{car.number}</span>
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </div>
                                
                        })}
                    </div>
                    <div className='input-field__btns'>
                        <button className='car-delete__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteCarBtn;