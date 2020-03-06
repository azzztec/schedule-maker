import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from '../../commonMethods/toggleInputPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class DeleteDriverBtn extends React.Component {
    constructor(props) {
        super(props);

        this.toggleInputsPanel = toggleInputsPanel.bind(this);
        this.closeInputsPanel = closeInputsPanel.bind(this);
        this.deleteDriver = this.deleteDriver.bind(this);

        this.panel = React.createRef();
    }

    deleteDriver(event) {
        const driverSurnameToDelete = event.target.dataset.driverSurname;
        this.props.deleteDriver(driverSurnameToDelete);
    }

    render() {
        return (
            <div className='driver-controls__delete input-field'>
                <button className='driver-delete__btn main-btn' onClick={this.toggleInputsPanel}>- Удалить водителя</button>
                <div className='driver-delete__delete-panel panel' ref={this.panel}>
                    <div className='panel__delete-container'>
                        {this.props.drivers.map((driver, index) => {
                            return <div className='panel__delete-option' onClick={(event) => this.deleteDriver(event)} data-driver-surname={driver} key={index}>
                                        <span className='panel__delete-item' data-driver-surname={driver}>{driver}</span>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                        })}
                    </div>
                    <div className='input-field__btns'>
                        <button className='driver-delete__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteDriverBtn;