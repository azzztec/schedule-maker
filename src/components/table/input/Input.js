import React, { Component } from 'react';
import Option from './Option';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.inputValidator = this.inputValidator.bind(this);
        this.showSelect = this.showSelect.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.hideSelect = this.hideSelect.bind(this);

        this.state = {
            inputTopValue: '',
            inputBottomValue: ''
        }
    }

    showSelect(select) {
        // const select = this.select.current;
        select.classList.add('active-panel');
    }

    hideSelect(select) {
        // const select = this.select.current;
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
                event.target.value = this.state.inputTopValue;
            } else event.target.value = this.state.inputBottomValue;
            return false;
        }
    }

    selectOption(event, place) {
        const optionValue = event.target.dataset.driver;
        if(place == 'top') {
            this.setState({
                inputTopValue: optionValue
            })
        } else {
            this.setState({
                inputBottomValue: optionValue
            })
        }
        this.hideSelect(event.target.previousElementSibling);
    }

    // componentDidUpdate() {
    //     console.log(this.state.inputTopValue)
    //     console.log(this.state.inputBottomValue)
    // }

    render() {
        return (
            <div className='table__input-container'>
                <div className='table__input-item'>
                    <div className='table__input-select'>
                        <Option place='top' selectOption={this.selectOption} currentInputValue={this.state.inputTopValue}/>
                    </div>
                    <input className='table__input-surname' value={this.state.inputTopValue} onChange={(event) => this.inputValidator(event, 'top')} placeholder='_____' data-place='top' />
                </div>
                <div className='table__input-item'>
                    <div className='table__input-select'>
                        <Option place='bottom' selectOption={this.selectOption} currentInputValue={this.state.inputBottomValue}/>
                    </div>
                    <input className='table__input-surname' value={this.state.inputBottomValue} onChange={(event) => this.inputValidator(event, 'bottom')} placeholder='_____' data-place='bottom'/>
                </div>
            </div>
        )
    }
}

export default Input