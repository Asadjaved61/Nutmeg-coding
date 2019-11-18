import React from "react";

const UserInformation = (props) => {
    const { startingContribution, monthlyContribution, totalAmount } = props;
    return (
           <div className="info">
               <p>
                   With the starting contribution of <b>£{startingContribution}</b> and a montly contribution of <b>£{monthlyContribution}</b> we
                   will deduct a total of <b>£{totalAmount}</b> in a timeframe of 36 months.
               </p>
           </div>
    )
}

export default UserInformation;