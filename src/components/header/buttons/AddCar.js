import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from '../../commonMethods/toggleInputPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddCarBtn extends React.Component {
    constructor(props) {
        super(props);

        this.toggleInputsPanel = toggleInputsPanel.bind(this);
        this.closeInputsPanel = closeInputsPanel.bind(this);

        this.setNewMake = this.setNewMake.bind(this);
        this.setNewNumber = this.setNewNumber.bind(this);
        this.addNewCar = this.addNewCar.bind(this);

        this.panel = React.createRef();

        this.state = {
            newMake: '',
            newNumber: null
        }

    }

    setNewMake(event) {
        this.setState({
            newMake: event.target.value
        })
    }

    setNewNumber(event) {
        this.setState({
            newNumber: event.target.value
        })
    }

    addNewCar() {
        const newCar = {
            make: this.state.newMake,
            number: this.state.newNumber
        }
        this.props.addCar(newCar);
    }

    render() {
        return (
            <div className='car-controls__add input-field'>
                <button className='car-add__btn main-btn' onClick={this.toggleInputsPanel}>+ Добавить машину</button>
                <div className='car-add__add-panel panel' ref={this.panel}>
                    <label className='input-field__label'>
                        Номер:
                        <input className='input-field__number' onChange={(event) => this.setNewNumber(event)} type='text' />
                    </label>
                    <label className='input-field__label'>
                        Модель:
                        <input className='input-field__make' onChange={(event) => this.setNewMake(event)} type='text' />
                    </label>
                    <div className='input-field__btns'>
                        <button className='car-add__btn-add btn-add'  onClick={() => this.addNewCar()}><FontAwesomeIcon icon={faPlus} /></button>
                        <button className='car-add__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCarBtn;