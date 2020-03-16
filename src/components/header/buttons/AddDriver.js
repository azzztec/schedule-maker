import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from '../../commonMethods/toggleInputPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddDriverBtn extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInputsPanel = toggleInputsPanel.bind(this);
        this.closeInputsPanel = closeInputsPanel.bind(this);
        this.addDriver = this.addDriver.bind(this);
        this.setNewDriver = this.setNewDriver.bind(this);

        this.panel = React.createRef();
        this.input = React.createRef();

        this.state = {
            newDriver: ''
        }
    }
    
    setNewDriver(event) {
        if(new RegExp(/^[а-яА-ЯёЁ]{0,15}$/i).test(event.target.value)){
            this.setState({
                newDriver: event.target.value
            })
        } else this.input.current.value = ''
    }

    addDriver() {
        const input = this.input.current;
        input.value = '';

        this.props.addDriver(this.state.newDriver);
    }

    render() {
        return (
            <div className='driver-controls__add input-field'>
                <button className='driver-add__btn main-btn' onClick={this.toggleInputsPanel}>+ Добавить водителя</button>
                <div className='driver-add__add-panel panel' ref={this.panel}>
                    <label className='input-field__label'>
                        Фамилия:
                        <input className='input-field__surname' onInput={(event) => this.setNewDriver(event)} ref={this.input} />
                    </label>
                    <div className='input-field__btns'>
                        <button className='driver-add__btn-add btn-add' onClick={this.addDriver}><FontAwesomeIcon icon={faPlus} /></button>
                        <button className='driver-add__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddDriverBtn;