import calculateTotalFees from "./calculateTotalFees";

describe("Given calculateTotalFees", () => {
  const STARTING_CONTRIBUTION = 500;
  const MONTHLY_CONTRIBUTION = 250;
  const MONTHS = 36;
  it("should return the correct total fees after 36 months", () => {
    expect(
      calculateTotalFees(STARTING_CONTRIBUTION, MONTHLY_CONTRIBUTION, MONTHS)
    ).toEqual(109.38);
  });
});
