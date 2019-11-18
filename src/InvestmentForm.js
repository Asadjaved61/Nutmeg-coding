import React, { Component } from "react";
import UserInformation from "./UserInformation";
import calculateTotalFees from "./calculateTotalFees";

import './InvestmentForm.css'

class InvestmentFoam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startingContribution: '',
            monthlyContribution: '',
            totalAmount: null
        }
    }

    handleInput = (event) => {
        const element = event.target;
        // set value of corresponding fields on input change
        this.setState({ [element.name]: element.value });
    }

    handleClick = (event) => {
        const { startingContribution, monthlyContribution } = this.state;
        // call method with input values
        const totalAmount = calculateTotalFees(
                parseInt(startingContribution),
                parseInt(monthlyContribution),
                36
            );

        this.setState({ totalAmount })
    }

    render() {
        const { startingContribution, monthlyContribution, totalAmount } = this.state;
        return (
            <form>
                <div className="formGroup" id="one">
                    <div className="formElement">
                        <label>Starting contribution</label>
                        <span><input 
                            type="number" 
                            name="startingContribution" 
                            onChange={this.handleInput}
                            value={startingContribution} 
                            min="1" required/>
                        </span>
                    </div>
                    <div className="formElement">
                        <label>Monthly contribution</label>
                        <span> <input 
                            type="number" 
                            name="monthlyContribution" 
                            onChange={this.handleInput}
                            value={monthlyContribution}
                            min="1" required/>
                        </span>
                    </div>
                </div>
                { this.state.totalAmount > 0 ? <UserInformation 
                        startingContribution = { startingContribution }
                        monthlyContribution = { monthlyContribution }
                        totalAmount = {totalAmount}
                          /> : '' }
                <button type="button" className="primary-button" onClick={this.handleClick}>Calculate</button>
            </form>
        )
    }
}

export default InvestmentFoam;