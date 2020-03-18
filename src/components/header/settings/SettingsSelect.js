import React from 'react';

class SettingSelect extends React.Component {
    constructor(props) {
        super(props)

        this.selectDriver = this.selectDriver.bind(this)

        this.state= {
            selectedDriver: ''
        }
    }

    selectDriver(event) {
        this.setState({
            selectedDriver: event.target.value
        })
    }

    componentDidUpdate() {
        let selectedDrivers = document.querySelectorAll('.table__input-surname.selected')
        let driverInput = document.querySelectorAll(`.table__input-surname[data-surname='${this.state.selectedDriver}']`);

        if(selectedDrivers) {
            selectedDrivers.forEach(item => item.classList.remove('selected'))
        }
        driverInput.forEach(item => item.classList.add('selected'))
    }

    render() {
        return (
                <select onChange={this.selectDriver}>
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