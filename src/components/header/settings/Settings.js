import React from 'react';
import SettingsSelect from './SettingsSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.clearStorage = this.clearStorage.bind(this);
        this.openPanel = this.openPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);

        this.deleteAllCars = false;
        this.deleteAllDrivers = false;
        this.cancelDate = false;
        this.clearTable = false;
        this.clearAll = false;

        this.panelRef = React.createRef();
        this.iconRef = React.createRef();
    }

    clearStorage() {
        if(this.clearAll) {
            localStorage.setItem("drivers", '')
            localStorage.setItem("date", '')
            localStorage.setItem("cellDrivers", '')
            localStorage.setItem("cars", '')
        } else {
            if(this.deleteAllCars) {
                console.log('вошло')
                localStorage.setItem("cars", '')
            }
            if(this.deleteAllDrivers) {
                localStorage.setItem("drivers", '')
            }
            if(this.calcelDate) {
                localStorage.setItem("date", '')
            }
            if(this.clearTable) {
                console.log()
                localStorage.setItem("cellDrivers", '')
            }
        }
        window.location.reload()
    }

    openPanel() {
        this.panelRef.current.classList.add('active');
        this.iconRef.current.classList.add('disabled');
    }

    closePanel() {
        this.panelRef.current.classList.remove('active');
        this.iconRef.current.classList.remove('disabled');
    }

    render() {
        return (
            <div className='settings'>
                <FontAwesomeIcon ref={this.iconRef} onClick={this.openPanel} className='settings__icon' icon={faCog} size='2x'/>
                <div ref={this.panelRef} className='settings__panel'>
                    <div className='settings__checkboxes'>
                        <div className='checkbox__container'>
                            <input onChange={() => {this.deleteAllCars = !this.deleteAllCars}} className='settings__checkbox' type='checkbox' id='deleteAllCars'/><label htmlFor='deleteAllCars'>Удалить все машины</label>
                        </div>
                        <div className='checkbox__container'>
                            <input onChange={() => {this.deleteAllDrivers = !this.deleteAllDrivers}} className='settings__checkbox' type='checkbox' id='deleteAllDrivers'/><label htmlFor='deleteAllDrivers'>Удалить всех водителей</label>
                        </div>
                        <div className='checkbox__container'>
                            <input onChange={() => {this.cancelDate = !this.cancelDate}} className='settings__checkbox' type='checkbox' id='cancelDate'/><label htmlFor='cancelDate'>Сбросить дату</label>
                        </div>
                        <div className='checkbox__container'>
                            <input onChange={() => {this.clearTable = !this.clearTable}} className='settings__checkbox' type='checkbox' id='clearTable'/><label htmlFor='clearTable'>Очистить таблицу</label>
                        </div>
                        <div className='checkbox__container delete-all'>
                            <input onChange={() => {this.clearAll = !this.clearAll}} className='settings__checkbox' type='checkbox' id='clearAll'/><label htmlFor='clearTable'>Очистить все</label>
                        </div>
                        <div className='select-container'>
                            Выделить водителя
                            <SettingsSelect drivers={this.props.drivers} />
                        </div>
                    </div>
                    <div className='input-field__btns'>
                        <button className='driver-add__btn-add btn-add' onClick={this.clearStorage}>Применить</button>
                        <button className='driver-add__btn-cancel btn-cancel' onClick={this.closePanel}>Отмена</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings