const calculateTotalFees = (
  startingContribution,
  monthlyContribution,
  months
) => {
  let totalFee = 0;
  let potValue = 0;

  for (let a=1; a <= months; a++) {
    let feePerMonth = 0;
    if (a === 1) {
      // for first month there is no charge so skip this iteration
      potValue = startingContribution;
      continue;
    }
    potValue += monthlyContribution;
    // calculate fee per month 
    feePerMonth = (potValue/100) * 0.0625;
    totalFee += feePerMonth;
  }
  // only show two decimal places and return number as integer
  return parseFloat(totalFee.toFixed(2));
};

export default calculateTotalFees;