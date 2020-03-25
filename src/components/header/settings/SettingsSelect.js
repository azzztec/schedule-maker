import React from 'react';

class SettingSelect extends React.Component {
    constructor(props) {
        super(props)

        this.selectDriver = this.selectDriver.bind(this);

        this.state= {
            selectedDriver: '',
            select: false
        }
    }

    selectDriver(event) {
        if(event.target.value != 'Не выбрано') {
            this.setState({
                selectedDriver: event.target.value
            })
        }
    }

    componentDidUpdate() {
        
        if(this.state.selectedDriver != '') {
            console.log('selectSettings')
            let selectedDrivers = document.querySelectorAll('.table__input-surname.selected')
            let driverInput = document.querySelectorAll(`.table__input-surname[data-surname='${this.state.selectedDriver}']`);

            if(selectedDrivers) {
                selectedDrivers.forEach(item => item.classList.remove('selected'))
            }
            driverInput.forEach(item => item.classList.add('selected'))
        }
    }

    render() {
        return (
                <select className='settings-select' onChange={this.selectDriver}>
                    <option className='select-option'>Не выбрано</option>
                    {
                        this.props.drivers.map((driver, index) => {
                            return <option key={index}>{driver}</option>
                        })
                    }
                </select>
        )
    }
}

export default SettingSelect;