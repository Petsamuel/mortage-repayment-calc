/* eslint-disable @typescript-eslint/no-explicit-any */
export const calculateMortgage = (userInput: any) => {
  const { MortgageAmount, MortgageTerm, InterestRate, MortgageType } =
    userInput;

  const monthlyInterestRate = InterestRate / 100 / 12;
  const numberOfPayments = MortgageTerm * 12;
  const mortgageAmount = MortgageAmount;

  let monthlyPayment: number;
  let totalRepay: number;

  if (MortgageType === "Repayment") {
    // Repayment mortgage calculation
    monthlyPayment =
      (mortgageAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    totalRepay = monthlyPayment * numberOfPayments; // Sum of all monthly payments
  } else if (MortgageType === "Interest Only") {
    // Interest-only mortgage calculation
    monthlyPayment = mortgageAmount * monthlyInterestRate;

    // For interest-only, total repayment is interest payments + principal amount
    totalRepay = monthlyPayment * numberOfPayments + mortgageAmount;
  } else {
    throw new Error("Unsupported mortgage type");
  }

  // Return as numbers (not strings)
  return { monthlyPayment, totalRepay, numberOfPayments };
};
