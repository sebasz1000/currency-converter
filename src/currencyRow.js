import React from 'react'

export default function currencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency
    } = props;
    console.log(typeof selectedCurrency)
    return (
        <div className="currency-row" data-tool-tip="Type a number please">
            <input type="number" className="input" ></input>
            <select>
                {
                    currencyOptions.map(option =>
                        <option key={option}
                            value={option}
                        /*{ ...selectedCurrency === option && SELECTED }*/
                        >{option}</option>
                    )
                }
            </select>
        </div>
    )
}


