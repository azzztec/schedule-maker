import React, { Component } from 'react';
import Option from './Option';
import {saveDriversInStorage, getFromStorage} from './saveDrivers';

class InputCell extends React.Component {
    constructor(props) {
        super(props);

        this.inputValidator = this.inputValidator.bind(this);
        this.showSelect = this.showSelect.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.hideSelect = this.hideSelect.bind(this);

        this.topRef = React.createRef()
        this.bottomRef = React.createRef()

        this.state = {
            inputTopValue: (getFromStorage.bind(this)()),
            inputBottomValue: (getFromStorage.bind(this)())
        }

    }

    showSelect(select) {
        select.classList.add('active-panel');
    }

    hideSelect(select) {
        select.classList.remove('active-panel');
    }

    inputValidator(event, place) {
        let currentInputValue = event.target.value;
        if(new RegExp(/^[а-яА-ЯёЁ]{0,15}$/i).test(currentInputValue)) {
            this.showSelect(event.target.previousElementSibling);
            if(place == 'top') {
                this.setState({
                    inputTopValue: currentInputValue
                })

            } else {
                this.setState({
                    inputBottomValue: currentInputValue
                })
            }
        } else {
            if(place == 'top'){
                if(this.state.inputTopValue === undefined) {
                    event.target.value = ''
                } else {
                    event.target.value = this.state.inputTopValue;
                }
            } else {
                if(this.state.inputBottomValue === undefined) {
                    event.target.value = ''
                } else {
                    event.target.value = this.state.inputBottomValue;
                }
            }
            return false;
        }
    }

    selectOption(event, place) {
        const optionValue = event.target.dataset.driver;
        if(place == 'top') {
            this.setState({
                inputTopValue: optionValue
            })
            console.log(this.state.inputTopValue)
        } else {
            this.setState({
                inputBottomValue: optionValue
            })
        }
        this.hideSelect(event.target.previousElementSibling);
    }

    componentDidMount() {
        getFromStorage()
    }

    componentDidUpdate() {
        saveDriversInStorage()
    }
 
    render() {
        return (
            <div className='table__input-container'>
                <div className='table__input-item'>
                    <div className='table__input-select'>
                        <Option place='top' selectOption={this.selectOption} currentInputValue={this.state.inputTopValue}/>
                    </div>
                    <input ref={this.topRef} className='table__input-surname' value={this.state.inputTopValue} onChange={(event) => this.inputValidator(event, 'top')} placeholder='_____' data-place='top' data-surname={this.state.inputTopValue} />
                </div>
                <div className='table__input-item'>
                    <div className='table__input-select'>
                        <Option place='bottom' selectOption={this.selectOption} currentInputValue={this.state.inputBottomValue}/>
                    </div>
                    <input ref={this.bottomRef} className='table__input-surname' value={this.state.inputBottomValue} onChange={(event) => this.inputValidator(event, 'bottom')} placeholder='_____' data-place='bottom' data-surname={this.state.inputBottomValue} />
                </div>
            </div>
        )
    }
}

export default InputCell