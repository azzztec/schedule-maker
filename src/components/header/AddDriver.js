import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from './commonMethods/toggleInputPanel';

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
        this.setState({
            newDriver: event.target.value
        })
    }

    addDriver() {
        const input = this.input.current;
        input.value = '';

        this.props.addDriver(this.state.newDriver);
    }

    render() {
        return (
            <div className='driver-controls__add driver-add'>
                <button className='driver-add__btn main-btn' onClick={this.toggleInputsPanel}>+ Добавить водителя</button>
                <div className='driver-add__add-panel panel' ref={this.panel}>
                    <label className='driver-add__label-surname'>
                        Фамилия:
                        <input className='driver-add__input-surname' onChange={(event) => this.setNewDriver(event)} ref={this.input} />
                    </label>
                    <button className='driver-add__btn-add btn-add' onClick={this.addDriver}>Добавить</button>
                    <button className='driver-add__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                </div>
            </div>
        )
    }
}

export default AddDriverBtn;