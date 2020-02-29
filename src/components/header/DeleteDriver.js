import React from 'react';
import {toggleInputsPanel, closeInputsPanel} from './commonMethods/toggleInputPanel';

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
            <div className='driver-controls__delete driver-delete'>
                <button className='driver-delete__btn main-btn' onClick={this.toggleInputsPanel}>- Удалить водителя</button>
                <div className='driver-delete__delete-panel panel' ref={this.panel}>
                    {this.props.drivers.map((driver, index) => {
                        return <div className='driver-delete__surname' onClick={(event) => this.deleteDriver(event)} data-driver-surname={driver} key={index}>{driver}</div>
                    })}
                    <button className='driver-delete__btn-cancel btn-cancel' onClick={this.closeInputsPanel}>Отмена</button>
                </div>
            </div>
        )
    }
}

export default DeleteDriverBtn;